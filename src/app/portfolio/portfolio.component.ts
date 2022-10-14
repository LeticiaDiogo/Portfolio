import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

          public nome:string;
          public objetivo:string;
          public conhecimento:string;
          public experiencia:string;

  constructor() {
        this.nome= "Nome:Letícia Diogo"
        this.objetivo= "Objetivo: Desejo ingressar na Área da Informática."
        this.conhecimento="Conhecimento: Possuo conhecimentos de Informática Básica, JAVA, HTML,CSS, Virtualização de servidores e etc..."
        this.experiencia="Experiência:Não possuo."

  }

  ngOnInit(): void {
  }

}
