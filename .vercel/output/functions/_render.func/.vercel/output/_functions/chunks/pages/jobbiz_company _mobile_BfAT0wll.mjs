/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-du-site-entreprise-avec-le-framework-flutter\">Mise en place du site Entreprise avec le framework Flutter.</h4>\n<ul>\n<li>Création de mission autonome avec:\n<ul>\n<li>Choix de l’entreprise si multi-compte</li>\n<li>Choix du secteur et du type de poste</li>\n<li>Choix optionnel des EPI, langues, permis</li>\n<li>Localisation</li>\n<li>Taux horaires</li>\n<li>Motif de la mission</li>\n<li>Invitation de profils</li>\n<li>Création de planning optionnel</li>\n</ul>\n</li>\n<li>Gestion des missions avec suppression possible</li>\n<li>Visualisation des factures</li>\n<li>Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.</li>\n<li>Gestion des relevés d’heures (validation, consultation)</li>\n<li>Gestion du token avec vérification de validité</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Entreprise Mobile","url":"https://www.jobbiz.fr/","tags":["Flutter","OneSignal","Http","Flutter Bloc","Yousign"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_company _mobile.md";
				const url = "/projects/jobbiz_company _mobile";
				function rawContent() {
					return "\n#### Mise en place du site Entreprise avec le framework Flutter. \n\n- Création de mission autonome avec:\n    - Choix de l'entreprise si multi-compte\n    - Choix du secteur et du type de poste\n    - Choix optionnel des EPI, langues, permis  \n    - Localisation\n    - Taux horaires\n    - Motif de la mission\n    - Invitation de profils \n    - Création de planning optionnel  \n  \n- Gestion des missions avec suppression possible\n- Visualisation des factures\n- Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.\n- Gestion des relevés d'heures (validation, consultation)\n- Gestion du token avec vérification de validité\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-du-site-entreprise-avec-le-framework-flutter","text":"Mise en place du site Entreprise avec le framework Flutter."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
