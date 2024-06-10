import { AbstractHandler } from './AbstractHandler';

export class NavHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'nav') {
            return `
            <div class="nav">
                <span class="user">
                    <i class="fa-solid fa-user"></i>
                </span>
                <span class="search" title="Buscar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <a href="#car" title="Carrinho de Compras">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>                
            </div>
            `;
        }
        return super.handle(request);
    }
}