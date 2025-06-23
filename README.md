# Next.js + Sanity CMS Demo

This is a Next.js project with Sanity CMS integration, featuring a main page with three sections: Hero, About, and Services.

## Features

- **Next.js 14** with App Router
- **Sanity CMS** integration
- **TypeScript** support
- **Tailwind CSS** for styling
- **Three main sections**: Hero, About, and Services
- **Service cards** with icons and pricing
- **Visual editor** at `/studio`
- **Live preview mode** at `/preview`
- **Singleton main page** - only one instance allowed

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── preview/          # Preview page for live editing
│   │   └── studio/           # Sanity Studio
│   └── ...
├── schemas/
│   ├── index.ts             # Schema exports
│   ├── mainPage.ts          # Main page schema
│   └── serviceCard.ts       # Service card schema
├── lib/
│   ├── sanity.client.ts     # Sanity client
│   ├── sanity.image.ts      # Image URL builder
│   ├── sanity.preview.ts    # Preview client
│   ├── preview.ts           # Preview URL resolver
│   └── deskStructure.ts     # Custom desk structure
└── sanity.config.ts         # Sanity configuration
```

## Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=ac2gfv99
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Main site: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio
   - Preview mode: http://localhost:3000/preview

## Usage

### Content Management

1. **Access Sanity Studio** at `/studio`
2. **Create the Main Page**:
   - Click on "Main Page" in the sidebar
   - Fill in the content for all three sections
   - Upload images for each section

3. **Create Service Cards**:
   - Click on "Service Cards" in the sidebar
   - Create individual service cards with:
     - Title
     - Description
     - Icon (optional)
     - Price (optional)

4. **Link Services to Main Page**:
   - Go back to the Main Page
   - In the Services Section, add references to your service cards

### Preview Mode

The project includes a live preview mode that allows you to see changes in real-time:

1. **Access Preview Mode**: Navigate to `/preview` in your browser
2. **Edit in Studio**: Make changes in the Sanity Studio
3. **See Live Updates**: Changes will appear in the preview mode immediately

### Schema Details

#### Main Page Schema

- **Hero Section**: Title, text, and image
- **About Section**: Title, text, and image
- **Services Section**: Title, text, image, and array of service references

#### Service Card Schema

- **Title**: Service name
- **Description**: Service description
- **Icon**: Optional service icon
- **Price**: Optional pricing information

## Development

### Adding New Sections

1. Update the `mainPage.ts` schema
2. Update the TypeScript interfaces in `page.tsx`
3. Update the GROQ query in `getMainPageData()`
4. Add the new section to the JSX

### Styling

The project uses Tailwind CSS. You can customize the styling by modifying the classes in the components.

## Deployment

1. **Deploy to Vercel**:

   ```bash
   npm run build
   ```

2. **Set environment variables** in your deployment platform:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`

## Sanity Configuration

- **Project ID**: ac2gfv99
- **Dataset**: production
- **Studio Path**: /studio
- **Preview Path**: /preview
- **Vision Tool**: Available at /studio/vision

## License

MIT
