# Fidan's Portfolio Website

A modern, responsive portfolio website built with Jekyll, featuring a beautiful design inspired by contemporary portfolio layouts.

## Features

✅ **Required Pages:**
- Home Page with profile photo and introduction
- About Page with background and qualifications
- Projects Page with Project 1 and optional Project 2 (Hour of Code)

✅ **Navigation & Footer:**
- Responsive navigation bar with mobile menu
- Footer with quick links and social media icons

✅ **Social Links:**
- GitHub profile icon
- Codecademy profile icon
- Link to public GitHub repository

✅ **Responsive Design:**
- Fully responsive layout that adapts to phones, tablets, and desktops
- Mobile-friendly navigation menu

✅ **Clean Code Structure:**
- Modular layout files in `_layouts/`
- Reusable components in `_includes/`
- Organized CSS in `assets/css/`

## Setup Instructions

1. **Update Configuration:**
   Edit `_config.yml` and update:
   - Your name
   - Email address
   - GitHub username and URLs
   - Codecademy profile URL
   - Repository URL (make sure it's public!)
   - Profile image path
   - Any other personal information

2. **Add Your Images:**
   - Place your profile photo at `assets/images/profile.jpg`
   - Add project screenshots to `assets/images/` (e.g., `project1.jpg`, `project2.jpg`)
   - Update image paths in the project cards if needed

3. **Customize Content:**
   - Edit `about.markdown` with your background and qualifications
   - Update `projects/index.html` with your actual project details
   - Add project images and links

4. **Run Locally:**
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   Then visit `http://localhost:4000`

5. **Deploy:**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Or deploy to any static hosting service

## Repository Requirements

⚠️ **Important:** Make sure your GitHub repository is **PUBLIC** as required by the project specifications.

## File Structure

```
website_Fidan/
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
│   ├── default.html
│   ├── home.html
│   └── page.html
├── _includes/           # Reusable components
│   ├── navigation.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   └── images/          # Your images go here
├── index.markdown       # Home page
├── about.markdown       # About page
├── projects/
│   └── index.html       # Projects page
└── README.md
```

## Customization

### Colors
Edit CSS variables in `assets/css/main.css`:
- `--primary-blue`
- `--primary-purple`
- `--primary-pink`

### Layout
Modify layout files in `_layouts/` to change page structure.

### Styling
All styles are in `assets/css/main.css` - customize as needed!

## Requirements Checklist

- [x] Home page with profile photo and text
- [x] About page with background and qualifications
- [x] Projects page with Project 1 (and optional Project 2)
- [x] Navigation bar and footer
- [x] Icons for GitHub and Codecademy
- [x] Link to public GitHub repository
- [x] Responsive design
- [x] Modular and clean code structure

## License

This project is open source and available for personal use.

