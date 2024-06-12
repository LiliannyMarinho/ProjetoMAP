import { AbstractHandler } from './AbstractHandler';

export class MenuHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'menu') {
      return `
        <nav class="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>`;
    }
    return super.handle(request);
  }
}
