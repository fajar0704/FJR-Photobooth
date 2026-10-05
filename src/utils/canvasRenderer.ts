import { PhotoboothSettings } from "./photoboothTypes";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export async function renderPhotostrip(
  photos: string[],
  settings: PhotoboothSettings
): Promise<string> {
  const loadedImages = await Promise.all(photos.map(loadImage));
  const count = photos.length;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create canvas context");

  const isGrid = settings.layout === "grid" && (count === 4 || count === 6);

  let canvasWidth = 1200;
  let canvasHeight = 3200;

  if (isGrid) {
    if (count === 4) {
      // 2 columns x 2 rows
      canvasWidth = 1600;
      canvasHeight = 1950;
    } else if (count === 6) {
      // 2 columns x 3 rows
      canvasWidth = 1600;
      canvasHeight = 2650;
    }
  } else {
    // Vertical Strip
    if (count === 3) {
      canvasWidth = 1080;
      canvasHeight = 2800;
    } else if (count === 4) {
      canvasWidth = 1080;
      canvasHeight = 3300;
    } else {
      // 6 photos vertical strip
      canvasWidth = 1000;
      canvasHeight = 4400;
    }
  }

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // 1. Draw Background
  const theme = settings.background;
  ctx.fillStyle = theme.bgValue;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Decorative film holes if retro theme
  if (theme.hasFilmHoles) {
    ctx.fillStyle = "#ffffff";
    const holeWidth = 28;
    const holeHeight = 48;
    const holeRadius = 8;
    const step = 85;
    for (let y = 60; y < canvasHeight - 60; y += step) {
      // Left side holes
      drawRoundedRect(ctx, 32, y, holeWidth, holeHeight, holeRadius);
      ctx.fill();
      // Right side holes
      drawRoundedRect(ctx, canvasWidth - 32 - holeWidth, y, holeWidth, holeHeight, holeRadius);
      ctx.fill();
    }
  }

  // Border outline if present
  if (theme.borderColor) {
    ctx.strokeStyle = theme.borderColor;
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, canvasWidth - 14, canvasHeight - 14);
  }

  // 2. Draw Photos
  const sideMargin = theme.hasFilmHoles ? 95 : isGrid ? 80 : 70;
  const topMargin = isGrid ? 80 : 80;
  const bottomFooterHeight = isGrid ? 220 : 250;
  const gap = isGrid ? 35 : 35;

  if (isGrid) {
    const cols = 2;
    const rows = count === 4 ? 2 : 3;
    const photoWidth = (canvasWidth - sideMargin * 2 - gap * (cols - 1)) / cols;
    const availableHeight = canvasHeight - topMargin - bottomFooterHeight;
    const photoHeight = (availableHeight - gap * (rows - 1)) / rows;

    loadedImages.forEach((img, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = sideMargin + col * (photoWidth + gap);
      const y = topMargin + row * (photoHeight + gap);

      drawSinglePhoto(ctx, img, x, y, photoWidth, photoHeight, settings);
    });
  } else {
    // Vertical Strip
    const photoWidth = canvasWidth - sideMargin * 2;
    const availableHeight = canvasHeight - topMargin - bottomFooterHeight;
    const photoHeight = (availableHeight - gap * (count - 1)) / count;

    loadedImages.forEach((img, i) => {
      const x = sideMargin;
      const y = topMargin + i * (photoHeight + gap);

      drawSinglePhoto(ctx, img, x, y, photoWidth, photoHeight, settings);
    });
  }

  // 3. Draw Footer Branding & Custom text
  const footerCenterY = canvasHeight - bottomFooterHeight / 2;

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Sticker on top of footer or corner if selected
  if (settings.selectedSticker) {
    ctx.font = "56px sans-serif";
    ctx.fillText(settings.selectedSticker, canvasWidth / 2, footerCenterY - 65);
  }

  // RuangMomen Branding
  ctx.fillStyle = theme.textColor;
  ctx.font = "bold 44px 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif";
  const brandName = "RUANG MOMEN";
  ctx.letterSpacing = "6px";
  ctx.fillText(brandName, canvasWidth / 2, footerCenterY - (settings.customCaption ? 20 : 0));

  // Custom Caption
  if (settings.customCaption) {
    ctx.font = "italic 32px 'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillStyle = theme.subtextColor;
    ctx.fillText(`“${settings.customCaption}”`, canvasWidth / 2, footerCenterY + 28);
  }

  // Date stamp
  if (settings.showDate) {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0].replace(/-/g, " . ");
    ctx.font = "24px 'Inter', monospace, sans-serif";
    ctx.fillStyle = theme.subtextColor;
    ctx.letterSpacing = "3px";
    ctx.fillText(dateStr, canvasWidth / 2, footerCenterY + (settings.customCaption ? 70 : 45));
  }

  ctx.restore();

  return canvas.toDataURL("image/png", 0.98);
}

function drawSinglePhoto(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  settings: PhotoboothSettings
) {
  ctx.save();

  // Subtle photo frame drop shadow
  ctx.shadowColor = "rgba(0,0,0,0.12)";
  ctx.shadowBlur = 16;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;

  // Clip rounded corners
  const radius = 18;
  drawRoundedRect(ctx, x, y, w, h, radius);
  ctx.fillStyle = "#000000";
  ctx.fill();

  // Reset shadow for drawing the photo
  ctx.shadowColor = "transparent";

  ctx.save();
  ctx.clip();

  // Apply photo filter
  if (settings.filter.canvasFilter && settings.filter.canvasFilter !== "none") {
    ctx.filter = settings.filter.canvasFilter;
  }

  // Crop cover math
  const imgRatio = img.width / img.height;
  const targetRatio = w / h;
  let sWidth = img.width;
  let sHeight = img.height;
  let sx = 0;
  let sy = 0;

  if (imgRatio > targetRatio) {
    sWidth = img.height * targetRatio;
    sx = (img.width - sWidth) / 2;
  } else {
    sHeight = img.width / targetRatio;
    sy = (img.height - sHeight) / 2;
  }

  ctx.drawImage(img, sx, sy, sWidth, sHeight, x, y, w, h);
  ctx.restore();

  // Delicate inner border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, x + 1.5, y + 1.5, w - 3, h - 3, radius - 1);
  ctx.stroke();

  ctx.restore();
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
