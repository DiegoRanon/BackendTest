const express = require("express");

const controleurEmployeur = require("../controlers/employeur-controleur");
const router = express.Router();

router.get("/:employeurId",controleurEmployeur.getEmployeurById);

router.post("/creerEmployeur",controleurEmployeur.creerEmployeur);

router.patch('/:employeurId', controleurEmployeur.updateEmployeur);

router.delete('/:employeurId', controleurEmployeur.supprimerEmployeur);

router.post('/connexion', controleurEmployeur.connexion);

module.exports = router;