/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Je viens de terminer une formation en alternance avec Jobbiz, où j’ai développé quatre sites web en React et deux applications mobiles en Flutter, tout en mettant en place le backend. Curieux et persévérant, je m’adapte facilement aux nouvelles technologies et défis. Je suis actuellement à la recherche d’un emploi pour mettre à profit mes compétences et continuer à évoluer dans le domaine du développement web et mobile.</p>";

				const frontmatter = {"title":"About","name":"Maxime Sabbadini","designation":"Développeur React & Flutter","location":"Draguignan, Var","pronouns":"REACT/FLUTTER","website":"http://tafutza.hn/kos"};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nJe viens de terminer une formation en alternance avec Jobbiz, où j'ai développé quatre sites web en React et deux applications mobiles en Flutter, tout en mettant en place le backend. Curieux et persévérant, je m'adapte facilement aux nouvelles technologies et défis. Je suis actuellement à la recherche d'un emploi pour mettre à profit mes compétences et continuer à évoluer dans le domaine du développement web et mobile.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
