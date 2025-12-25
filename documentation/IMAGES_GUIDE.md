# Image Assets Guide

This guide details all the image assets required for the Agneepath 7.0 website.

## Directory Structure

```
public/
├── team/                # Team member photos
├── sponsors/            # Sponsor logos
└── favicon/            # Favicon files
```

---

## 1. Team Member Photos

**Location:** `/public/team/`

**Required Images:** 36 team member photos

### Naming Convention

Files should be named in lowercase with hyphens, matching the names in `lib/team-data.ts`:

#### Fest Secretaries (2)
- `bhavya-sood.jpg`
- `adviti-basu.jpg`

#### Deputy Fest Secretaries (4)
- `diya-sandhir.jpg`
- `antara-malhotra.jpg`
- `soham-mishra.jpg`
- `kunal-bansal.jpg`

#### Sponsorships & Headliners (3)
- `ambika-mishra.jpg`
- `rida-khan.jpg`
- `kartik-khandelwal.jpg`

#### Finance (1)
- `arshiya-goyal.jpg`

#### Social Media, Design & Marketing (4)
- `tejasvini-yadav.jpg`
- `avani-goel.jpg`
- `khushi-sethi.jpg`
- `lakshya-kapoor.jpg`

#### Events and Logistics (4)
- `siddharth-bhatnagar.jpg`
- `parth-agarwal.jpg`
- `akshitha-ashok.jpg`
- `sanaya-mehta.jpg`

#### Safety and Security (3)
- `manoj-n.jpg`
- `razin.jpg`
- `veda-samhita.jpg`

#### Outreach & Registration Desk (4)
- `vidishaa.jpg`
- `jiya-vaya.jpg`
- `nishita-agarwal.jpg`
- `nishka-desai.jpg`

#### Travel & Hospitality (3)
- `gia-doshi.jpg`
- `minal.jpg`
- `anshul-tekriwal.jpg`

#### Decor and Ceremonies (2)
- `rajita-rai.jpg`
- `aadya-saxena.jpg`

#### HR, Legal and Documentation (2)
- `manya-kapoor.jpg`
- `anshika.jpg`

#### Tech (4)
- `nitin-s.jpg`
- `parshwa-doshi.jpg`
- `hriday-koppikar.jpg`
- `shristi-sharma.jpg`

### Image Specifications

| Property | Requirement |
|----------|-------------|
| **Format** | JPG or PNG (JPG preferred for smaller file size) |
| **Aspect Ratio** | Square (1:1) - e.g., 800x800px, 1000x1000px |
| **Minimum Size** | 800x800px |
| **Recommended Size** | 1000x1000px |
| **Maximum File Size** | 500KB per image |
| **Background** | Any (will be cropped to square) |
| **Orientation** | Portrait/headshot style |

### How to Add Team Photos

1. **Prepare photos:**
   - Crop to square aspect ratio
   - Optimize/compress images (use [TinyPNG](https://tinypng.com/) or similar)
   - Rename according to naming convention above

2. **Copy to public folder:**
   ```bash
   cp /path/to/photos/*.jpg public/team/
   ```

3. **Verify placement:**
   ```bash
   ls public/team/
   ```

4. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/meet-the-team
   ```

---

## 2. Sponsor Logos

**Location:** `/public/sponsors/`

**Required Images:** As needed (currently 12 placeholder sponsors defined)

### Current Sponsor Logo Files

Based on `lib/sponsors-data.ts`, you need:

1. `tech-innovations.png`
2. `global-sports.png`
3. `energy-drinks.png`
4. `digital-media.png`
5. `apparel.png`
6. `financial.png`
7. `restaurant.png`
8. `transport.png`
9. `events.png`
10. `health.png`
11. `education.png`
12. `gaming.png`

### Image Specifications

| Property | Requirement |
|----------|-------------|
| **Format** | PNG (for transparency) or JPG |
| **Aspect Ratio** | Square preferred, but flexible |
| **Minimum Size** | 800x800px |
| **Recommended Size** | 1000x1000px |
| **Maximum File Size** | 500KB per logo |
| **Background** | Transparent (PNG) or White |
| **Padding** | Include whitespace around logo |

### How to Add Sponsor Logos

1. **Prepare logos:**
   - Use PNG format with transparent background
   - Ensure logos have adequate padding/whitespace
   - Compress images

2. **Copy to public folder:**
   ```bash
   cp /path/to/logos/*.png public/sponsors/
   ```

3. **Update sponsor data:**
   - Edit `lib/sponsors-data.ts`
   - Update logo paths, names, and websites
   - Add or remove sponsors as needed

4. **Test:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/sponsors
   ```

**See:** [SPONSORS_SETUP.md](./SPONSORS_SETUP.md) for detailed sponsor management guide.

---

## 3. Favicon

**Location:** `/public/favicon/`

**Required Files:** Already included ✅

The favicon files are already in place:
- `favicon.ico` - Main favicon (multi-size ICO file)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG

### To Replace Favicon

If you want to update the favicon:

1. **Create new favicon files:**
   - Use [favicon.io](https://favicon.io/) or similar tool
   - Generate from `public/logo.png`
   - Download package with all sizes

2. **Replace files:**
   ```bash
   cp new-favicon/favicon.ico public/favicon/
   cp new-favicon/favicon-16x16.png public/favicon/
   cp new-favicon/favicon-32x32.png public/favicon/
   ```

3. **Clear browser cache** and test

---

## 4. Other Images

### Logo
**File:** `/public/logo.png`
**Status:** ✅ Already present
**Usage:** Used as Apple touch icon and general branding

---

## Quick Setup Script

Create a script to batch copy images:

```bash
#!/bin/bash
# setup-images.sh

echo "Setting up Agneepath images..."

# Team photos
if [ -d "team-photos" ]; then
  echo "Copying team photos..."
  cp team-photos/*.jpg public/team/
  echo "✅ Team photos copied"
fi

# Sponsor logos
if [ -d "sponsor-logos" ]; then
  echo "Copying sponsor logos..."
  cp sponsor-logos/*.png public/sponsors/
  echo "✅ Sponsor logos copied"
fi

# Verify
echo ""
echo "Team photos: $(ls public/team/*.jpg 2>/dev/null | wc -l) files"
echo "Sponsor logos: $(ls public/sponsors/*.png 2>/dev/null | wc -l) files"
echo ""
echo "✅ Image setup complete!"
```

**Usage:**
```bash
chmod +x setup-images.sh
./setup-images.sh
```

---

## Image Optimization Tips

1. **Use compression tools:**
   - [TinyPNG](https://tinypng.com/) - Online PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Advanced image optimizer
   - [ImageOptim](https://imageoptim.com/) - macOS app

2. **Command line tools:**
   ```bash
   # Install ImageMagick
   brew install imagemagick
   
   # Resize and compress
   mogrify -resize 1000x1000 -quality 85 *.jpg
   ```

3. **Batch optimization:**
   ```bash
   # Compress all JPGs in a folder
   for img in *.jpg; do
     convert "$img" -quality 85 "optimized-$img"
   done
   ```

---

## Checklist

Before deploying to production:

- [ ] All 36 team member photos added to `/public/team/`
- [ ] All sponsor logos added to `/public/sponsors/`
- [ ] All images optimized (< 500KB each)
- [ ] All images follow naming convention
- [ ] Tested locally at `/meet-the-team` and `/sponsors`
- [ ] Images display correctly on all devices
- [ ] No broken image placeholders
- [ ] Favicon displays in browser tabs

---

## Troubleshooting

### Team member photo not showing
1. Check filename matches exactly (lowercase, hyphens)
2. Verify file is in `/public/team/`
3. Check file extension (.jpg vs .jpeg)
4. Clear browser cache
5. Rebuild: `npm run build`

### Sponsor logo not showing
1. Verify path in `lib/sponsors-data.ts`
2. Check file exists in `/public/sponsors/`
3. Ensure PNG has transparent background or white bg
4. Check file size (should be < 500KB)

### Favicon not updating
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Check files exist in `/public/favicon/`
3. Restart dev server
4. Try incognito/private window

---

## Contact

For technical assistance with images:
- Check main [README.md](../README.md)
- Review [SPONSORS_SETUP.md](./SPONSORS_SETUP.md) for sponsor details
- Contact the Tech team

---

**Last Updated:** December 25, 2025
**Agneepath 7.0** - Ashoka University
