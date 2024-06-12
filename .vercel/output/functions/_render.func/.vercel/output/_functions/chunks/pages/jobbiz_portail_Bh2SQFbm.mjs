/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"mise-en-place-du-portail-de-connexioninscription-avec-le-framework-react-js\">Mise en place du portail de connexion/inscription avec le framework REACT JS.</h4>\n<p>Pour la partie connexion:</p>\n<ul>\n<li>Gestion des comptes utilisateurs selon leur role avec redirection vers le site intérimaire ou entreprise.</li>\n<li>Gestion du mot de passe oublié</li>\n<li>Gestion de la création du nouveau mot de passe</li>\n</ul>\n<p>Pour l’inscription :</p>\n<ul>\n<li>Vérification avec certaines informations de l’utilisateur pour éviter les doublons de compte.</li>\n<li>Gestion de la création du compte avec un envoi d’email contenant un code aléatoire à fournir pour la validation de l’inscription</li>\n</ul>";

				const frontmatter = {"title":"JOBBIZ - Portail de connexion/Inscription","url":"https://www.jobbiz.fr/","tags":["React JS","JavaScript","Axios","HTML","Tailwind CSS","CSS"],"date":"2022-2024"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/projects/jobbiz_portail.md";
				const url = "/projects/jobbiz_portail";
				function rawContent() {
					return "\n#### Mise en place du portail de connexion/inscription avec le framework REACT JS. \nPour la partie connexion:\n\n- Gestion des comptes utilisateurs selon leur role avec redirection vers le site intérimaire ou entreprise.\n- Gestion du mot de passe oublié\n- Gestion de la création du nouveau mot de passe\n\nPour l'inscription :\n\n- Vérification avec certaines informations de l'utilisateur pour éviter les doublons de compte.\n- Gestion de la création du compte avec un envoi d'email contenant un code aléatoire à fournir pour la validation de l'inscription";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"mise-en-place-du-portail-de-connexioninscription-avec-le-framework-react-js","text":"Mise en place du portail de connexion/inscription avec le framework REACT JS."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
