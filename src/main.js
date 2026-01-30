import express from 'express';
import fs from 'fs';

const app = express();
const appPort = 3000;
const countries = JSON.parse(fs.readFileSync('./countries.json'));

app.get('/', (req, res) => {
    console.log('verif2');
    res.status(200).send('Salut');
   
})

app.get('/countries',(req, res) => {
    if(!countries || countries.length === 0){
        return res.status(404).json({message: 'Aucun pays trouvé'});
    }else{
        res.status(200);
        res.send(countries);
    }
 })

app.get('/countriesnormal',(req, res) => {
    if(!countries || countries.length === 0){
        return res.status(404).json({message: 'Aucun pays trouvé'});
    }else{
        const countriesnormal = countries.map(country => ({
        name: country.name || 'Donnée manquante',
        cca2: country.cca2 || 'Donnée manquante',
        cca3: country.cca3 || 'Donnée manquante',
        currencies: country.currencies || 'Donnée manquante',
        languages: country.languages || 'Donnée manquante',
        flag: country.flag || 'Donnée manquante',
        capital: country.capital || 'Donnée manquante',
        population: country.population || 'Donnée manquante',
        continents: country.continents || 'Donnée manquante'

        }))
        res.status(200).send(countriesnormal); 
    }
   
})
app.get('/countriesshort',(req, res) => {
    if(!countries || countries.length === 0){
        return res.status(404).json({message: 'Aucun pays trouvé'});
    }else{
        const countriesshort= countries.map(country => ({
            name: country.name || 'Donnée manquante',
            cca2: country.cca2 || 'Donnée manquante',
            cca3: country.cca3 || 'Donnée manquante',
            flag: country.flag || 'Donnée manquante'
        }))
        res.status(200).send(countriesshort);
    }

})

app.listen(3000, () =>{
    console.log('serveur actif 3');
}) 