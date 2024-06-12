/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Mise en place d’un site vitrine sous WordPress avec message automatisé sur les horaires de bureau.</li>\n<li>Création d’une application web Gestion Devis/Clients .</li>\n<li>Création de devis et fichier PDF , suivi des clients et devis, tableau des fournisseurs.</li>\n</ul>\n<p>Site et project d’application abandonné suite à la demande du client.</p>";

				const frontmatter = {"title":"Stage Entreprise Lionel Thibaud","date":2021,"url":"https://g.co/kgs/TLkDVAL","location":"Saint Aygulf","org":"Lionel Thibaud","tags":["Wordpress","Axios","PHP","Javascript"]};
				const file = "/Users/max/code/astro-cv-esquelete-main/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Mise en place d’un site vitrine sous WordPress avec message automatisé sur les horaires de bureau.\n- Création d’une application web Gestion Devis/Clients .\n- Création de devis et fichier PDF , suivi des clients et devis, tableau des fournisseurs.\n\nSite et project d'application abandonné suite à la demande du client.\n";
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
