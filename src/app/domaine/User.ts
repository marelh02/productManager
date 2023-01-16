export default class User{
    nom:String;
    prenom:String;
    dn:String;
    tel:String;
    sexe:String;
    email:String;
    mdp:String;


  constructor(nom: String, prenom: String, dn: String, tel: String, sexe: String, email: String, mdp: String) {
    this.nom = nom;
    this.prenom = prenom;
    this.dn = dn;
    this.tel = tel;
    this.sexe = sexe;
    this.email = email;
    this.mdp = mdp;
  }
}
