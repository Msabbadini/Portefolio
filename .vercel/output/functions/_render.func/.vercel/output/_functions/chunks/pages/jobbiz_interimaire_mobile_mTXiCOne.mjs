/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-de-lapplication-mobile-intérimaire-avec-le-framework-flutter\">Mise en place de l’application mobile Intérimaire avec le framework Flutter.</h4>\n<ul>\n<li>Recherche de missions avec filtre( localisation, secteur).</li>\n<li>Gestion du Profil</li>\n<li>Gestion des candidatures</li>\n<li>Visualisation des fiches de paies</li>\n<li>Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.</li>\n<li>Gestion des relevés d’heures avec pour la section complet l’estimation du salaire.</li>\n<li>Gestion des documents pour la validation d’identité</li>\n<li>Gestion du token avec vérification de validité</li>\n<li>Intégration de webview pour Yousign et Intercom</li>\n<li>Gestion des disponibilités de l’intérimaire</li>\n<li>Gestion des choix d’emploi souhaités</li>\n<li>Gestion des candidatures avec plusieurs paramètres possibles( EPI, disponibilités selon le planning de l’entreprise,…)</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Intérimaire Mobile","url":"https://www.jobbiz.fr/","tags":["Flutter","OneSignal","Http","Flutter Bloc","Yousign"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_interimaire_mobile.md";
				const url = "/projects/jobbiz_interimaire_mobile";
				function rawContent() {
					return "\n#### Mise en place de l'application mobile Intérimaire avec le framework Flutter. \n\n- Recherche de missions avec filtre( localisation, secteur).\n- Gestion du Profil\n- Gestion des candidatures\n- Visualisation des fiches de paies\n- Visualisation des contrats signées ainsi que la possibilité de faire la signature électroniquement.\n- Gestion des relevés d'heures avec pour la section complet l'estimation du salaire.\n- Gestion des documents pour la validation d'identité\n- Gestion du token avec vérification de validité \n- Intégration de webview pour Yousign et Intercom\n- Gestion des disponibilités de l'intérimaire\n- Gestion des choix d'emploi souhaités\n- Gestion des candidatures avec plusieurs paramètres possibles( EPI, disponibilités selon le planning de l'entreprise,...)\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-de-lapplication-mobile-intérimaire-avec-le-framework-flutter","text":"Mise en place de l’application mobile Intérimaire avec le framework Flutter."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
