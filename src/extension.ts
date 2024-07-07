import * as vscode from 'vscode';
import { extractHandler } from './handler/extractHandler';
import { reverseHandler } from './handler/reverseHandler';
import { shuffleHandler } from './handler/shuffleHandler';
import { sortHandler } from './handler/sortHandler';
import { sortLineHandler } from './handler/sortLineHandler';
import { uniqueHandler } from './handler/uniqueHandler';
import { countOccurrencesHandler } from './handler/countOccurrencesHandler';
import { calculationHandler } from './handler/calculationHandler';
import { calcDateHandler } from './handler/calcDateHandler';
import { jsonHandler } from './handler/jsonHandler';
import { regexpHandler } from './handler/regexpHandler';
import { base64Handler } from './handler/base64Handler';
import { xmlHandler } from './handler/xmlHandler';
import { multiSelectionHandler } from './handler/multiSelectionHandler';
import { countUpListHandler } from './handler/countUpListHandler';
import { zeroPaddingHandler } from './handler/zeroPaddingHandler';
import { incrementFromHandler, incrementFromInputHandler } from './handler/incrementFromHandler';
import { decrementToHandler, decrementToInputHandler } from './handler/decrementToHandler';
import { incrementByInputHandler, incrementByHandler } from './handler/incrementByHandler';
import { decrementByInputHandler, decrementByHandler } from './handler/decrementByHandler';
import { caseHandler } from './handler/caseHandler';
import { showCommandsHandler } from './handler/showCommandsHandler';
import { dnsHandler } from './handler/dnsHandler';
import { urlHandler } from './handler/urlHandler';
import { jwtHandler } from './handler/jwtHandler';
import { samlHandler } from './handler/samlHandler';
import { whoisHandler } from './handler/whoisHandler';
import { harToMermaidHandler } from './handler/harToMermaidHandler';
import { x509CertificateHandler } from './handler/x509CertificateHandler';
import { hashHandler } from './handler/hashHandler';
import { hmacHandler } from './handler/hmacHandler';
import { removeCursorHandler } from './handler/removeCursorHandler';
import { removeCharacterFromEachSideHandler } from './handler/removeCharacterFromEachSideHandler';
import { geoIpHandler } from './handler/geoIpHandler';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.show-commands', showCommandsHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.multi-selection', multiSelectionHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.extract', extractHandler(true)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.extract.exclude-blank-rows', extractHandler(false)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.reverse', reverseHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.shuffle', shuffleHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort.string.ascending', sortHandler('string', true)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort.string.descending', sortHandler('string', false)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort.number.ascending', sortHandler('number', true)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort.number.descending', sortHandler('number', false)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort-line.string.ascending', sortLineHandler('string', true)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort-line.string.descending', sortLineHandler('string', false)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort-line.number.ascending', sortLineHandler('number', true)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.sort-line.number.descending', sortLineHandler('number', false)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.unique', uniqueHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.count-occurrences.count', countOccurrencesHandler('count')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.count-occurrences.word', countOccurrencesHandler('word')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.calculation', calculationHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.calculation.date', calcDateHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.json.format', jsonHandler('format')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.json.minify', jsonHandler('minify')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.json.parse', jsonHandler('parse')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.json.stringify', jsonHandler('stringify')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.regex.g', regexpHandler('g')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.regex.gi', regexpHandler('gi')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.base64.encode', base64Handler('encode')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.base64.decode', base64Handler('decode')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.base64.deflate', base64Handler('deflate')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.base64.unzip', base64Handler('inflate')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.xml.format', xmlHandler('format')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.xml.minify', xmlHandler('minify')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.count-up-list', countUpListHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.zero-padding', zeroPaddingHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.increment-from-1', incrementFromHandler(1)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.increment-from-n', incrementFromInputHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.decrement-to-1', decrementToHandler(1)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.decrement-to-n', decrementToInputHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.increment-by-1', incrementByHandler(1)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.increment-by-n', incrementByInputHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.decrement-by-1', decrementByHandler(1)));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.decrement-by-n', decrementByInputHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.camel', caseHandler('camel')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.capital', caseHandler('capital')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.constant', caseHandler('constant')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.dot', caseHandler('dot')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.kebab', caseHandler('kebab')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.no', caseHandler('no')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.pascal', caseHandler('pascal')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.path', caseHandler('path')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.sentence', caseHandler('sentence')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.snake', caseHandler('snake')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.train', caseHandler('train')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.upper', caseHandler('upper')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.case.lower', caseHandler('lower')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.a', dnsHandler('A')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.aaaa', dnsHandler('AAAA')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.any', dnsHandler('ANY')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.caa', dnsHandler('CAA')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.cname', dnsHandler('CNAME')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.mx', dnsHandler('MX')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.naptr', dnsHandler('NAPTR')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.ns', dnsHandler('NS')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.ptr', dnsHandler('PTR')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.soa', dnsHandler('SOA')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.srv', dnsHandler('SRV')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.txt', dnsHandler('TXT')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.lookup', dnsHandler('LOOKUP')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.dns.reverse', dnsHandler('REVERSE')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.url.parse', urlHandler('PARSE_TO_JSON')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.url.encode-uri', urlHandler('ENCODE_URI')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.url.decode-uri', urlHandler('DECODE_URI')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.url.encode-uri-component', urlHandler('ENCODE_URI_COMPONENT')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.url.decode-uri-component', urlHandler('DECODE_URI_COMPONENT')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.jwt.decode', jwtHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.saml.decode', samlHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.whois', whoisHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.har-to-mermaid', harToMermaidHandler('mermaid')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.har-to-image', harToMermaidHandler('image')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.x509', x509CertificateHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hash-sha256', hashHandler('sha256')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hash-sha512', hashHandler('sha512')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hash-md5', hashHandler('md5')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hmac-sha256', hmacHandler('sha256')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hmac-sha512', hmacHandler('sha512')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.crypto.hmac-md5', hmacHandler('md5')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.geo-ip', geoIpHandler));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.remove-cursor-above', removeCursorHandler('above')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.remove-cursor-below', removeCursorHandler('below')));
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('selection-manipulator.remove-character-from-each-side', removeCharacterFromEachSideHandler));
}

export function deactivate() { }
