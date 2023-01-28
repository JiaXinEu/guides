
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("The sections below explains how to use PlantUML in a project.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("You will have to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git add")]),_v(" any new diagrams generated!")])]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('p',[_v("It is highly recommended to consistently color your UML diagrams as an visual aid. You can achieve this by creating a dictionary of colors and import it like CSS.")]),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_c('p',[_v("Then you can use it in another PlantUML file like this:")]),_v(" "),_m(15),_v(" "),_m(16),_m(17),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("For a comprehensive list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam")]),_v("s, see "),_c('a',{attrs:{"href":"https://plantuml-documentation.readthedocs.io/en/latest/"}},[_v("unofficial PlantUML skinparam documentation")]),_v(".")])]),_v(" "),_m(18),_v(" "),_c('p',[_v("While PlantUML’s automatic layout engine usually produces satisfactory results, at times the result can be less than ideal, especially on larger diagrams. Here is an example where the default layout generated by PlantUML has a lot of overlapping lines that are hard to decipher:")]),_v(" "),_m(19),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("In most cases, you should consider decomposing the diagram into smaller ones or focusing on a more specific portion of the diagram.")])]),_v(" "),_c('p',[_v("Here are some techniques you can use to obtain a more palatable diagram.")]),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('p',[_v("Clever usage of arrow directions will resolve most layout issues. For example, the table below shows how the way in which you specify arrows can results in drastically different layouts for the same diagram.")]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("Explicitly define all symbols to avoid any potential layout mishaps.")])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-plantuml"}},[_v("Using PlantUML‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-plantuml"}},[_v("Setting up PlantUML‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#creating-editing-exporting-diagrams"}},[_v("Creating/editing/exporting diagrams‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tips-and-tricks"}},[_v("Tips and tricks‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#maintaining-consistency-in-formatting"}},[_v("Maintaining consistency in formatting‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#repositioning-elements"}},[_v("Repositioning elements‎")])])])])],1)])],1),_v(" "),_m(27)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-plantuml"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-plantuml"}}),_v("Using PlantUML"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-plantuml","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('strong',[_c('a',{attrs:{"href":"http://plantuml.com/"}},[_v("PlantUML")]),_v(" is a tool for specifying various diagrams in a textual form.")]),_v(" It is particularly useful in software projects where you want to update the diagrams incrementally, as the project evolves over time.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-plantuml"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-plantuml"}}),_v("Setting up PlantUML"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-plantuml","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Install Graphviz.")]),_v(" Graphviz is a dependency that PlantUML requires to generate more advanced diagrams. Head over to the "),_c('a',{attrs:{"href":"https://www.graphviz.org/download/"}},[_v("downloads page")]),_v(" on the official Graphviz website and follow instructions to install Graphviz."),_c('br'),_v(" "),_c('span',{staticClass:"fab fa-windows",attrs:{"aria-hidden":"true"}}),_v(" Windows 10 users can download the zip file in "),_c('a',{attrs:{"href":"https://www2.graphviz.org/Packages/stable/windows/10/msbuild/Release/Win32/"}},[_v("here")]),_v(" and unzip it somewhere. The required "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dot.exe")]),_v(" file is inside that zip file.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Install the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin in IntelliJ IDEA.")])]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Marketplace")]),_v(" and install the plugin "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Then go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Languages & Frameworks")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML")]),_v(" or search for PlantUML. Configure the path to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dot")]),_v(" executable. This executable can be found in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/bin")]),_v(" directory where you installed GraphViz earlier."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/ConfiguringGraphviz.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/ConfiguringGraphviz.png","alt":""}})])])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"creating-editing-exporting-diagrams"}},[_c('span',{staticClass:"anchor",attrs:{"id":"creating-editing-exporting-diagrams"}}),_v("Creating/editing/exporting diagrams"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-editing-exporting-diagrams","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("After installing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin, simply create or open any "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".puml")]),_v(" file to start editing it.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/EditingDeleteSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/EditingDeleteSequenceDiagram.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Any changes you make in editor pane on the left will be reflected in the preview pane on the right. However, do take note that these changes "),_c('em',[_v("will not")]),_v(" be reflected in your actual documentation until you export the diagram.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin allows you to export individual diagrams to a location of your choosing. Click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Save Current Diagram Only")]),_v(" button and choose the location to export the image file.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tips-and-tricks"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tips-and-tricks"}}),_v("Tips and tricks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tips-and-tricks","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"maintaining-consistency-in-formatting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"maintaining-consistency-in-formatting"}}),_v("Maintaining consistency in formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#maintaining-consistency-in-formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, you can create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Style.puml")]),_v(" with the contents:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Style.puml.")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("!define LOGIC_COLOR #3333C4\n")]),_c('span',[_v("!define LOGIC_COLOR_T1 #7777DB\n")]),_c('span',[_v("!define LOGIC_COLOR_T2 #5252CE\n")]),_c('span',[_v("!define LOGIC_COLOR_T3 #1616B0\n")]),_c('span',[_v("!define LOGIC_COLOR_T4 #101086\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("UndoSequenceDiagram.puml.")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("!include Style.puml\n")]),_c('span',[_v("\n")]),_c('span',[_v("box Logic LOGIC_COLOR_T2\n")]),_c('span',[_v("participant \":LogicManager\" as LogicManager LOGIC_COLOR\n")]),_c('span',[_v("participant \":AddressBookParser\" as AddressBookParser LOGIC_COLOR\n")]),_c('span',[_v("participant \":UndoCommand\" as UndoCommand LOGIC_COLOR\n")]),_c('span',[_v("end box\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can fine-tune the formatting of PlantUML diagrams with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam")]),_v(" command. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam backgroundColor transparent")]),_v(" turns the background of the diagram transparent.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"repositioning-elements"}},[_c('span',{staticClass:"anchor",attrs:{"id":"repositioning-elements"}}),_v("Repositioning elements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#repositioning-elements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/RawUiDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/RawUiDiagram.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"link-lengths"}},[_c('span',{staticClass:"anchor",attrs:{"id":"link-lengths"}}),_v("Link lengths"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-lengths","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("By default, a short link ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("->")]),_v(") points to right and a long link ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-->")]),_v(") points downwards. you can extend any link to make it longer ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--->")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/ArrowLength.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/ArrowLength.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"link-directions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"link-directions"}}),_v("Link directions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-directions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('table',[_c('caption',[_v("Table: Link directions")]),_v(" "),_c('colgroup',[_c('col',{staticStyle:{"width":"40%"}}),_v(" "),_c('col',{staticStyle:{"width":"60%"}})]),_v(" "),_c('thead',[_c('tr',{staticClass:"header"},[_c('th',[_v("Source")]),_v(" "),_c('th',[_v("Result")])])]),_v(" "),_c('tbody',[_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A --> Z\nB --> Z\nC --> Z\nD --> Z\n"),_c('p',[_v("A --> 1\nB --> 2\nC --> 3\nD --> 4")]),_v("\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/AllDown.png"}})])]),_v(" "),_c('tr',{staticClass:"even"},[_c('td',[_c('pre',[_v("'default is down\nA --> Z\n'specify down\nB -down-> Z\n'shorthand for down\nC -d-> Z\n'arrow lengths take priority\nD -down> Z\n\nA -up-> 1\nB -up-> 2\nC -up-> 3\nD -up-> 4\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/UpAndDown.png"}})])]),_v(" "),_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A -up-> Z\nB -up-> Z\nC -up-> Z\nD -up-> Z\n\nA --> 1\nB --> 2\nC --> 3\nD --> 4\n\n'Force A B C D\nA -right[hidden]- B\nB -right[hidden]- C\nC -right[hidden]- D\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/HiddenArrows.png"}})])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Another technique you can use to influence the layout is to reorder definitions.")]),_v(" The layout engine will attempt to order objects in the order in which they are defined. If there is no formal definition, the objects is taken to be declared upon its first usage.")])}
},function anonymous(
) {
with(this){return _c('table',[_c('caption',[_v("Table: Definition ordering and outcomes")]),_v(" "),_c('colgroup',[_c('col',{staticStyle:{"width":"70%"}}),_v(" "),_c('col',{staticStyle:{"width":"30%"}})]),_v(" "),_c('thead',[_c('tr',{staticClass:"header"},[_c('th',[_v("Source")]),_v(" "),_c('th',[_v("Result")])])]),_v(" "),_c('tbody',[_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A --> B\nC --> D\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/ABeforeC.png"}})])]),_v(" "),_c('tr',{staticClass:"even"},[_c('td',[_c('pre',[_v("'Class C is defined before A\nClass C\n\nA --> B\nC --> D\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/CBeforeA.png"}})])]),_v(" "),_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("package \"Rule Of Thumb\";{\n    Class C\n    A --> B\n    C --> D\n}\n")])]),_v(" "),_c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/PackagesAndConsistency.png"}})])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(" on Sat, 28 Jan 2023, 17:14:14 GMT+8]")])])])}
}];
  