var languageTarget;
var languageBrowserUser = navigator.language || navigator.userLanguage;
var languageSplit = languageBrowserUser.split('-');
languageTarget = languageSplit[0];
var rtlLanguages = ['ar', 'he', 'ps', 'ur'];
var textasAlert;
function languageAlertG11n(languageTarget, textAlert) {
	if (textAlert[languageTarget]) {
		textAsAlert = textAlert[languageTarget];
	} else {
		textAsAlert = textAlert.fallback;
	}
	return textAsAlert;
}
jQuery(document).ready(function($) {
	if ($('.translate-g11n').length > 0) {
		hasG11nText = true;
	} else {
		hasG11nText = false;
	}
	if ($('.g11n-content').length > 0) {
		hasG11nContent = true;
	} else {
		hasG11nContent = false;
	}
	var idText;
	$('.translate-g11n').each(function(i) {
		idText = this.id;
		text = $(this).html();
		$('#' + idText).attr('data-g11n-fallback', text);
	});
	function languageTextG11n(languageTarget) {
		$('.translate-g11n').each(function() {
			if ($(this).attr('dir')) {
				$(this).removeAttr('dir');
			}
			var g11nSource = $(this).text();	
			if ($(this).data('g11n-'+ languageTarget)) {
				if ($.inArray(languageTarget, rtlLanguages) !== -1) {
					$(this).attr('dir', 'rtl');
				}
				g11nTranslate = $(this).data('g11n-'+ languageTarget);
				} else {
					g11nTranslate = $(this).data('g11n-fallback');		
				}
			$(this).html(g11nTranslate);
		});
	}
	function showTextG11n(languageTarget) {
		var targetLangClass = $('.g11n-lang-' + languageTarget);
		var targetLangName = '.g11n-lang-' + languageTarget;
		$('.g11n-content').each(function() {
			if ($(this).attr('dir')) {
				$(this).removeAttr('dir');
			}
			var idContent;
			idContent = $(this).parent().attr('id');
			if ($(this).is(targetLangClass)) {
				if ($.inArray(languageTarget, rtlLanguages) !== -1) {
					$('#' + idContent + ' ' + '.g11n-content').removeClass('g11n-show').addClass('g11n-hidden').attr('dir', 'rtl');
				} else {
					$('#' + idContent + ' ' + '.g11n-content').removeClass('g11n-show').addClass('g11n-hidden');
				}
				$('#' + idContent + ' ' + targetLangName).removeClass('g11n-hidden').addClass('g11n-show');
			}
		});
	}
	if (hasG11nText) {
		languageTextG11n(languageTarget);
	}
	if (hasG11nContent) {
		showTextG11n(languageTarget);
	}
	if ($('html').attr('lang')) {
		$('html').attr('lang', languageTarget);
	}
	if ($('[id*='+ languageTarget +'].language').hasClass('bootstrap-framework')) {
		$('[id*='+ languageTarget +'].language').addClass('btn-success').removeClass('btn-primary').attr('disabled', 'disabled');
	} else {
		$('[id*='+ languageTarget +'].language').attr('disabled', 'disabled');
	}
	$('.language').on('click', function() {
		if (hasG11nContent) {
			$('.g11n-content').removeClass('g11n-show').addClass('g11n-hidden');
			$('.g11n-lang-fallback').removeClass('g11n-hidden').addClass('g11n-show');
		}
		if ($('[id*='+ languageTarget +'].language').hasClass('bootstrap-framework')) {
			$('[id*='+ languageTarget +'].language').removeClass('btn-success').addClass('btn-primary').removeAttr('disabled');
		} else {
			$('[id*='+ languageTarget +'].language').removeAttr('disabled');
		}
		languageTarget = $(this).attr('id');
		if ($('html').attr('lang')) {
			$('html').attr('lang', languageTarget);
		}
		if (hasG11nText) {
			languageTextG11n(languageTarget);
		}
		if (hasG11nContent) {
			showTextG11n(languageTarget);
		}
		if ($('[id*='+ languageTarget +'].language').hasClass('bootstrap-framework')) {
			$('[id*='+ languageTarget +'].language').addClass('btn-success').removeClass('btn-primary').attr('disabled', 'disabled');
		} else {
			$('[id*='+ languageTarget +'].language').attr('disabled', 'disabled');
		}
		return false;
	});
	$('.g11n-nojs').removeClass('g11n-show').addClass('g11n-hidden');
	$('.g11n-js').removeClass('g11n-hidden').addClass('g11n-show');
});