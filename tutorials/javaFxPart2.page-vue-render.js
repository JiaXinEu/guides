
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_c('p',[_v("In this tutorial, we will be creating a GUI for Duke from scratch based on the following mockup.")]),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_m(6),_v(" "),_c('p',[_v("Now that we know what controls we need to implement our UI, let’s start programming! We quickly run into a problem: how do we show all of them on the screen at once?")]),_v(" "),_m(7),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/javafx/JavaFxHierarchy.png"}}),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("One way to obtain the layout in the mockup is as follows.")]),_v(" "),_c('pic',{attrs:{"src":"/guides/33f1d89d39e02cd34aa0a9e18491ff0a.png"}}),_v(" "),_m(11),_v(" "),_m(12),_c('p',[_v("Run the application and you should see something like this:")]),_v(" "),_m(13),_v(" "),_c('p',[_v("That is not what we were expecting, what did we forget to do?")]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_c('p',[_v("Run the application again. It should now look like this:")]),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('hr'),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#javafx-tutorial-part-2-creating-a-gui-for-duke"}},[_v("JavaFX tutorial part 2 - Creating a GUI for Duke‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#javafx-controls"}},[_v("JavaFX controls‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#designing-the-layout"}},[_v("Designing the Layout‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#styling-the-controls"}},[_v("Styling the Controls‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#exercises"}},[_v("Exercises‎")])])])],1)])],1),_v(" "),_m(23)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"javafx-tutorial-part-2-creating-a-gui-for-duke"}},[_c('span',{staticClass:"anchor",attrs:{"id":"javafx-tutorial-part-2-creating-a-gui-for-duke"}}),_v("JavaFX tutorial part 2 - Creating a GUI for Duke"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javafx-tutorial-part-2-creating-a-gui-for-duke","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/DukeMockup.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/DukeMockup.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"javafx-controls"}},[_c('span',{staticClass:"anchor",attrs:{"id":"javafx-controls"}}),_v("JavaFX controls"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javafx-controls","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Controls are reusable UI elements. Refer to the "),_c('a',{attrs:{"href":"https://openjfx.io/javadoc/11/javafx.controls/javafx/scene/control/package-summary.html"}},[_v("JavaFX's official documentation")]),_v(" for a list of controls available.\nFrom the mockup above, can you identify the controls that we will need to use?")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Mockup")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Control")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/MockupImageView.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/MockupImageView.png","alt":""}})])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("ImageView")])]),_v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/MockupLabel.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/MockupLabel.png","alt":""}})])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Label")])]),_v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/MockupButton.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/MockupButton.png","alt":""}})])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Button")])]),_v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/MockupTextField.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/MockupTextField.png","alt":""}})])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("TextField")])]),_v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/MockupScrollPane.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/MockupScrollPane.png","alt":""}})])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("ScrollPane")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"designing-the-layout"}},[_c('span',{staticClass:"anchor",attrs:{"id":"designing-the-layout"}}),_v("Designing the Layout"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#designing-the-layout","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Each scene is initialized with a root "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v(". In the previous tutorial, our root "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v(" was a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(".\nWhat happens when we need to display more than one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v(" on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Scene")]),_v("? For that, we need to understand the JavaFX hierarchy. Recall from the previous tutorial:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("From the diagram, you see that the root "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v(" can contain many other "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(" and similarly, each of those "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(" can contain many other "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(". This means that if we can find a "),_c('em',[_v("container")]),_v(" to set as our root "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Node")]),_v(", we can place all our other "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Nodes")]),_v(" in it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("But how do we get the exact layout we want in the UI? JavaFX provides that functionality in the form of "),_c('strong',[_v("layout panes")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("javafx.scene.layouts")]),_v(". Each layout pane follows a "),_c('em',[_v("layout policy")]),_v(" to decide how to arrange its children. For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBox")]),_v(" lays out its children in a single vertical column and its counterpart, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HBox")]),_v(" lays out its children in a single horizontal row.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("💡 A comprehensive list of layouts and how they behave is available here from the "),_c('a',{attrs:{"href":"https://openjfx.io/javadoc/11/javafx.graphics/javafx/scene/layout/package-summary.html"}},[_v("official documentation")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To get that layout, we create a new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AnchorPane")]),_v(" and add our controls to it. Similarly, we create a new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBox")]),_v(" to hold the contents of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ScrollPane")]),_v(". The code should look something like this:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.application.Application;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.Scene;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.control.Button;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.control.ScrollPane;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.control.TextField;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.layout.AnchorPane;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.scene.layout.VBox;\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" javafx.stage.Stage;\n")]),_c('span',[_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Duke")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Application")]),_v(" ")]),_v("{\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" ScrollPane scrollPane;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" VBox dialogContainer;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" TextField userInput;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Button sendButton;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Scene scene;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("main")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String[] args)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ... ")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Override")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("start")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Stage stage)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("         "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//Step 1. Setting up required components")]),_v("\n")]),_c('span',[_v("         \n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//The container for the content of the chat to scroll.")]),_v("\n")]),_c('span',[_v("         scrollPane = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ScrollPane();\n")]),_c('span',[_v("         dialogContainer = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" VBox();\n")]),_c('span',[_v("         scrollPane.setContent(dialogContainer);\n")]),_c('span',[_v("\n")]),_c('span',[_v("         userInput = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" TextField();\n")]),_c('span',[_v("         sendButton = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Button("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Send\"")]),_v(");\n")]),_c('span',[_v("     \n")]),_c('span',[_v("         AnchorPane mainLayout = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" AnchorPane();\n")]),_c('span',[_v("         mainLayout.getChildren().addAll(scrollPane, userInput, sendButton);\n")]),_c('span',[_v("\n")]),_c('span',[_v("         scene = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Scene(mainLayout);\n")]),_c('span',[_v("     \n")]),_c('span',[_v("         stage.setScene(scene);\n")]),_c('span',[_v("         stage.show();\n")]),_c('span',[_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// more code to be added here later")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/RawLayout.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/RawLayout.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"styling-the-controls"}},[_c('span',{staticClass:"anchor",attrs:{"id":"styling-the-controls"}}),_v("Styling the Controls"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#styling-the-controls","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Almost every JavaFX object offer properties that you can set to customize its look and feel. For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stage")]),_v(" allows you to set its preferred size and title. Again, refer to the official JavaFX documentation for a comprehensive list of properties that you can modify. Here’s how you can get the application to look like the mockup:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Add the following code to the bottom of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("start")]),_v(" method. You'll have to add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import javafx.scene.layout.Region;")]),_v(" to the imports too.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Override")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("start")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Stage stage)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//Step 1. Formatting the window to look as expected.")]),_v("\n")]),_c('span',[_v("         \n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//...")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//Step 2. Formatting the window to look as expected")]),_v("\n")]),_c('span',[_v("        stage.setTitle("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Duke\"")]),_v(");\n")]),_c('span',[_v("        stage.setResizable("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("false")]),_v(");\n")]),_c('span',[_v("        stage.setMinHeight("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("600.0")]),_v(");\n")]),_c('span',[_v("        stage.setMinWidth("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("400.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        mainLayout.setPrefSize("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("400.0")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("600.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        scrollPane.setPrefSize("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("385")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("535")]),_v(");\n")]),_c('span',[_v("        scrollPane.setHbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);\n")]),_c('span',[_v("        scrollPane.setVbarPolicy(ScrollPane.ScrollBarPolicy.ALWAYS);\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        scrollPane.setVvalue("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("        scrollPane.setFitToWidth("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("true")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// You will need to import `javafx.scene.layout.Region` for this. ")]),_v("\n")]),_c('span',[_v("        dialogContainer.setPrefHeight(Region.USE_COMPUTED_SIZE);\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        userInput.setPrefWidth("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("325.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        sendButton.setPrefWidth("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("55.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        AnchorPane.setTopAnchor(scrollPane, "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        AnchorPane.setBottomAnchor(sendButton, "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("        AnchorPane.setRightAnchor(sendButton, "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("        \n")]),_c('span',[_v("        AnchorPane.setLeftAnchor(userInput , "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("        AnchorPane.setBottomAnchor(userInput, "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1.0")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// more code to be added here later")]),_v("\n")]),_c('span',[_v("    }\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/javafx/FinalLayout.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/javafx/FinalLayout.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"exercises"}},[_c('span',{staticClass:"anchor",attrs:{"id":"exercises"}}),_v("Exercises"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exercises","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("In the tutorial, we used an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AnchorPane")]),_v(" to achieve the desired layout.")]),_v(" "),_c('ol',[_c('li',[_v("Can you find other ways to obtain a similar layout?")]),_v(" "),_c('li',[_v("What are the advantages and disadvantages of your layout?")])])]),_v(" "),_c('li',[_c('p',[_v("Try interacting with the application")]),_v(" "),_c('ol',[_c('li',[_v("What happens when you press the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Enter")]),_v(" key or left-click the send button?")]),_v(" "),_c('li',[_v("Why?")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.4")]),_v(" on Wed, 14 Jul 2021, 2:11:06 GMT+8]")])])])}
}];
  