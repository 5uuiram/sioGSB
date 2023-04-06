import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  login: any;
  titre: string = "Connexion"
  mdp: any;
  lblMessage: string | undefined;
  estCache: boolean = true;
  change: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  valider(): void {
    if (this.login == "toto" && this.mdp == "titi") {
      this.lblMessage = "Mot de passe correct",
        this.estCache = false;
      console.log("oそっか");
    }
    else {
      console.log("⣿⠉⣿⠉⣿⡏⠹⡏⢹⡏⢹⣿⣿⠉⣿⠉⣿⡟⢋⠛⣿⠉⡟⢉⡏⠹⠏⣹⣿\n⣿⠄⣿⠄⣿⡇⡄⠁⢸⡇⢸⣿⣿⠄⣿⠄⣿⠄⣿⣿⣿⠄⡀⢻⣿⡄⢠⣿⣿\n⣿⣦⣤⣴⣿⣧⣿⣤⣼⣧⣬⣭⣿⣦⣤⣴⣿⣧⣤⣤⣿⣤⣷⣤⣿⣧⣼⣿⣿");
      this.lblMessage = "Mot de passe incorrect";
      this.estCache = false;
    }

  }
}
