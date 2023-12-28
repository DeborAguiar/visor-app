import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {
  constructor(private router: Router,
    private route: ActivatedRoute) { }


  verifyPass() {
    const senha = (document.getElementById('codigoInput') as HTMLInputElement).value;

    if (senha.length === 6) {
      const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
      this.router.navigate([`../place`, numeroAleatorio], { relativeTo: this.route });
    } else {
      console.log('Senha incorreta');
    }
  }
}
