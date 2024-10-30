=== Lilith Glocalization ===
Contributors: william top
Donate link: http://glocalization.384400.com/
Tags: i18n, internationalisation, internationalization, jQuery, L10n, localisation, localization, translations
Requires at least: 3.0.1
Tested up to: 3.8
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Lilith Glocalization provides two simple ways to display post or page in multiple languages.

== Description ==
Lilith Glocalization supports two methods.

* Block method

&lt;div id="hello"&gt;
	&lt;p class="g11n-lang-fr g11n-content g11n-hidden"&gt;Bonjour tout le monde !&lt;/p&gt;
	&lt;p class="g11n-lang-fallback g11n-content g11n-show"&gt;Hello world!&lt;/p&gt;
&lt;/div&gt;

The script detects the language of the browser to load the page and show the translation without user intervention. We can also buid language switcher.

"fr" ("g11n-lang-fr") corresponds to the target language. The code of a target language must correspond to [ISO 639-1](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). "fallback" is the default language: it appears if the content of the target language is not available.

* In-line method

&lt;p id="hello" class="translate-g11n" data-g11n-fr="Bonjour tout le monde !"&gt;Hello world!&lt;/p&gt;

"fr" ("data-g11n-fr") corresponds to the target language.

[Glocalization](http://glocalization.384400.com)

You can see a demonstration and find tutorial on [Glocalization](http://glocalization.384400.com).

== Installation ==
1. Upload "lilith-glocalization" to the "/wp-content/plugins/" directory.
1. Activate the plugin through the "Plugins" menu in WordPress.

== Frequently Asked Questions ==
=

== Screenshots ==
=

== Changelog ==
= 0.1 =
* Initial release.

== Upgrade Notice ==
=