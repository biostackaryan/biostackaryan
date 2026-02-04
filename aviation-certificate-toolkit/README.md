# ✈️ Aviation Certificate Toolkit

A web-based toolkit for generating professional aviation certificates with customizable coordinates and layouts.

## Features

- **Multiple Certificate Types**: Choose from Flight Completion, Pilot Training, Safety Training, or Maintenance Certification
- **Customizable Coordinates**: Select from preset layouts or define custom element positions via dropdown menu
- **4-Page Certificate Structure**:
  - **Page 1** (Editable): Main certificate with recipient details
  - **Page 2**: Terms and Conditions
  - **Page 3**: Training Record
  - **Page 4**: Verification Information
- **Print/PDF Export**: Generate PDF certificates directly from browser
- **Real-time Preview**: See changes instantly as you modify settings

## Quick Start

1. Open `index.html` in any modern web browser
2. Fill in the certificate details (recipient name, date, etc.)
3. Select a coordinate preset from the dropdown or customize positions
4. Preview all pages using the page tabs
5. Click "Generate PDF" or "Print Certificate" to export

## Layout Presets

| Preset | Description |
|--------|-------------|
| Standard | Default balanced layout |
| Centered | Elements closer together, centered |
| Left Aligned | Text aligned to the left |
| Compact | Reduced spacing for dense content |
| Expanded | More spacing between elements |
| Custom | Define your own coordinates |

## Custom Coordinates

When "Custom" is selected from the dropdown, you can adjust:
- **Title Position**: X/Y coordinates for the certificate title
- **Name Position**: X/Y coordinates for recipient name
- **Details Position**: X/Y coordinates for course details
- **Footer Position**: X/Y coordinates for signatures and date

All coordinates are in percentage (0-100) of the certificate area.

## Files Structure

```
aviation-certificate-toolkit/
├── index.html      # Main HTML page
├── styles.css      # Styling for the toolkit
├── script.js       # JavaScript functionality
└── README.md       # This documentation
```

## Browser Support

Works with all modern browsers:
- Chrome (recommended for PDF export)
- Firefox
- Safari
- Edge

## Usage Tips

1. **For consistent certificates**: Save your preferred coordinate preset name and use it every time
2. **For PDF generation**: Chrome's print dialog allows saving directly as PDF
3. **For bulk certificates**: Bookmark the page with your settings to quickly generate multiple certificates

## License

Free to use for personal and commercial purposes.

---

Created for aviation certificate generation needs. Replace manual Excel workflows with this easy-to-use web toolkit.
