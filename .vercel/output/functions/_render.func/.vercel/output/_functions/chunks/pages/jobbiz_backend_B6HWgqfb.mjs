/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-du-backend-avec-une-architecture-monolith-api\">Mise en place du backend avec une architecture monolith API.</h4>\n<ul>\n<li>Mise en place de OneSignal pour les notifications</li>\n<li>Mise en place de la structure:\n<ul>\n<li>Controller</li>\n<li>Models</li>\n<li>Routes</li>\n<li>Services</li>\n<li>Media</li>\n</ul>\n</li>\n<li>Mise en place de Discord pour des messages bots automatisés</li>\n<li>Mise en place de Yousign pour la création de lien pour la signature</li>\n<li>Mise en place de Cron pour l’envoi de notifications automatiques selon des paramètres.</li>\n<li>Mise en place d’un système de mail</li>\n<li>Gestion des fichiers lors de l’envoi avec renommage des fichiers selon le type via un middleware et déplacement dans le dossier de l’intérimaire ou entreprise.</li>\n<li>Gestion avec Bestt de la création de contrat, fiche de paie, …</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Backend","url":"https://www.jobbiz.fr/","tags":["Node JS","JavaScript","Express","MongoDB","CRON","Multer","OneSignal","Yousign","Discord"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_backend.md";
				const url = "/projects/jobbiz_backend";
				function rawContent() {
					return "\n#### Mise en place du backend avec une architecture monolith API. \n\n- Mise en place de OneSignal pour les notifications\n- Mise en place de la structure:\n    - Controller\n    - Models\n    - Routes\n    - Services\n    - Media\n- Mise en place de Discord pour des messages bots automatisés\n- Mise en place de Yousign pour la création de lien pour la signature\n- Mise en place de Cron pour l'envoi de notifications automatiques selon des paramètres.\n- Mise en place d'un système de mail\n- Gestion des fichiers lors de l'envoi avec renommage des fichiers selon le type via un middleware et déplacement dans le dossier de l'intérimaire ou entreprise.\n- Gestion avec Bestt de la création de contrat, fiche de paie, ...";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-du-backend-avec-une-architecture-monolith-api","text":"Mise en place du backend avec une architecture monolith API."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
