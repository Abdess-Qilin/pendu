import { Link } from "../link/link.js"

export function Home() {
    return (

        <>
            <h1>PenduPalooza</h1>
            <p>Plongez dans le monde tordant du PenduPalooza – là où les lettres se cachent, les mots font la fête et les grimaces sont les bienvenues !</p>
            <Link link="/niveau/facile" text="Niveau facile" />
            <Link link="/niveau/moyen" text="Niveau moyen" />
            <Link link="/niveau/difficile" text="Niveau difficile" />
        </>
    )
}