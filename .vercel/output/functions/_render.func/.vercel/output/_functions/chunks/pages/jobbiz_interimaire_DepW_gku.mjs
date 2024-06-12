/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-du-site-intérimaire-avec-le-framework-react-js\">Mise en place du site Intérimaire avec le framework REACT JS.</h4>\n<ul>\n<li>Recherche de missions avec filtre( localisation, secteur).</li>\n<li>Gestion du Profil</li>\n<li>Gestion des candidatures</li>\n<li>Visualisation des fiches de paies</li>\n<li>Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.</li>\n<li>Gestion des relevés d’heures</li>\n<li>Gestion du token avec vérification de validité</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Intérimaire Web","url":"https://www.jobbiz.fr/","tags":["React JS","JavaScript","Axios","HTML","Tailwind CSS","CSS","Yousign"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_interimaire.md";
				const url = "/projects/jobbiz_interimaire";
				function rawContent() {
					return "\n#### Mise en place du site Intérimaire avec le framework REACT JS. \n\n- Recherche de missions avec filtre( localisation, secteur).\n- Gestion du Profil\n- Gestion des candidatures\n- Visualisation des fiches de paies\n- Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.\n- Gestion des relevés d'heures\n- Gestion du token avec vérification de validité\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-du-site-intérimaire-avec-le-framework-react-js","text":"Mise en place du site Intérimaire avec le framework REACT JS."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
