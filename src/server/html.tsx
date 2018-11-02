export function toHtml({ block, title }: { block: string, title?: string }): string {
    return `
        <!doctype html>
        <html>
            <head>
                <link rel="stylesheet" href="css/bundle.css">
                <script src="bundle.js" defer></script>
                <title>${title || 'Yandex Дом'}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div class="app">${block}</div>
            </body>
        </html>
    `;
}
