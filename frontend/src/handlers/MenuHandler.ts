import { AbstractHandler } from './AbstractHandler';

export class MenuHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === 'menu') {
      return `
        <nav class="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>`;
    }
    return super.handle(request);
  }
}
