import { AbstractHandler } from './AbstractHandler';

export class LogoHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'logo') {
            return `
            <a href="/">
                <img src="path_to_logo" alt="Petshop Logo" />
            </a>
            `;
        }
        return super.handle(request);
    }
}