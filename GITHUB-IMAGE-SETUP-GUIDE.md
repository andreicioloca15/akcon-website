# GitHub Image Setup Guide - CORRECTED

## ✅ ISSUE FIXED

The original path `/src/assets/images/projects/` was incorrect for Vite. Images referenced in JSON must be in the `public/` folder.

**All paths have been corrected to:** `/images/projects/` → which maps to `public/images/projects/`

---

## 📸 Complete List of Images to Upload

Upload these 10 images to the GitHub repository at:
**`public/images/projects/`**

### Core Project Images
1. ✅ **mihalt.jpg**
2. ✅ **cristi.jpg**
3. ✅ **acoperis_albastru_-_alba_iulia.jpeg**
4. ✅ **00a8129e-d3fd-43a3-a9e5-49704438504e.jpg**

### DJI Drone Photos
5. ✅ **dji_fly_20250725_174044_171_1767900943954_photo.jpg**
6. ✅ **dji_fly_20250725_174154_175_1767900940021_photo.jpg**
7. ✅ **dji_fly_20250804_125944_201_1767900076098_photo.jpg**
8. ✅ **dji_fly_20250804_130334_211_1767899958956_photo.jpeg**
9. ✅ **dji_fly_20250909_160218_261_1767899902514_photo.jpg**
10. ✅ **dji_fly_20250909_160308_264_1767899897525_photo.jpeg**

---

## 📋 Files Updated (15 total)

### Service Pages (7 files)
- ✅ `src/content/service-pages/tigla-ceramica.json`
- ✅ `src/content/service-pages/tigla-metalica.json`
- ✅ `src/content/service-pages/montaj-acoperisuri.json`
- ✅ `src/content/service-pages/reparatii-acoperisuri.json`
- ✅ `src/content/service-pages/mansardari.json`
- ✅ `src/content/service-pages/renovare-acoperisuri.json`

### Portfolio (7 files)
- ✅ `src/content/portfolio/casa-moderna-blaj.json`
- ✅ `src/content/portfolio/renovare-vila-cugir.json`
- ✅ `src/content/portfolio/acoperis-nou-ocna-mures.json`
- ✅ `src/content/portfolio/mansardare-premium-aiud.json`
- ✅ `src/content/portfolio/vila-premium-alba-iulia.json`
- ✅ `src/content/portfolio/renovare-completa-sebes.json`
- ✅ `src/content/portfolio/montaj-tigla-metalica-alba-iulia.json`

### About (1 file)
- ✅ `src/content/about.json`

---

## 🚀 Next Steps

### Step 1: Upload Images to GitHub
1. Go to your GitHub repository
2. Navigate to `public/images/projects/`
3. Click "Add file" → "Upload files"
4. Upload all 10 images listed above
5. Commit the changes

### Step 2: Verify on Website
After uploading, check these pages to ensure images display correctly:
- `/servicii/tigla-ceramica` - Hero image + case study photo
- `/servicii/tigla-metalica` - Hero image + mihalt.jpg
- `/servicii/montaj-acoperisuri` - Hero image
- `/servicii/reparatii-acoperisuri` - Hero image
- `/servicii/mansardari` - Hero image
- `/servicii/renovare-acoperisuri` - Hero image + during photo
- `/despre-noi` - Team photo (cristi.jpg)
- Homepage portfolio section - All 7 project cards

---

## 📝 Path Structure

All JSON files now use:
```
"/images/projects/filename.jpg"
```

Which maps to the file system path:
```
public/images/projects/filename.jpg
```

In Vite, the `public/` folder is served from the root `/`, so:
- File location: `public/images/projects/mihalt.jpg`
- URL path: `/images/projects/mihalt.jpg`

---

## 🔧 Troubleshooting

If images don't show after upload:
1. Verify file names match exactly (case-sensitive)
2. Check browser console for 404 errors
3. Clear browser cache
4. Ensure images are in: `public/images/projects/`
5. Verify the `.gitkeep` file exists in `public/images/projects/`

---

## ✅ Build Status

**Project builds successfully!**
- All image paths corrected
- Build tested and passing
- Ready for image upload

---

**Status**: CORRECTED - All image paths now point to the correct public folder location.
