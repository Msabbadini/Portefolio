/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-du-site-administrateur-avec-le-framework-react-js\">Mise en place du site Administrateur avec le framework REACT JS.</h4>\n<ul>\n<li>Gestion de vivier:\n<ul>\n<li>Gestion des intérimaires</li>\n<li>Envoi de notifications pour le vivier</li>\n</ul>\n</li>\n<li>Gestion des missions avec:\n<ul>\n<li>Attribution de la mission</li>\n<li>Modification des informations</li>\n<li>Invitation de profils</li>\n</ul>\n</li>\n<li>Validation des documents pour l’identité de l’intérimaire</li>\n<li>Gestion des relevés d’heures entreprise, intérimaire</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Administrateur","url":"https://www.jobbiz.fr/","tags":["React JS","JavaScript","Axios","HTML","Tailwind CSS","CSS"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_admin.md";
				const url = "/projects/jobbiz_admin";
				function rawContent() {
					return "\n#### Mise en place du site Administrateur avec le framework REACT JS. \n\n- Gestion de vivier:\n    - Gestion des intérimaires\n    - Envoi de notifications pour le vivier\n- Gestion des missions avec:\n    - Attribution de la mission\n    - Modification des informations\n    - Invitation de profils\n- Validation des documents pour l'identité de l'intérimaire\n- Gestion des relevés d'heures entreprise, intérimaire";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-du-site-administrateur-avec-le-framework-react-js","text":"Mise en place du site Administrateur avec le framework REACT JS."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
