import { platform } from 'os';

export function toHtml({ block, title, bundleName, platform }: { block: string, title?: string, bundleName?: string, platform?: 'desktop' | 'mobile' }): string {
    return `
        <!doctype html>
        <html>
            <head>
                <script defer>window.PLATFORM = '${platform || 'desktop'}';</script>
                <script src="${bundleName || 'bundle'}.js" defer></script>
                <title>${title || 'Yandex Дом'}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <div class="app">${block}</div>
            </body>
        </html>
    `;
}
