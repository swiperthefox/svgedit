/* globals svgEditor */
svgEditor.readLang({
  lang: 'lang',
  dir: 'dir',
  common: {
    ok: 'ok',
    cancel: 'cancel',
    key_backspace: 'key_backspace',
    key_del: 'key_del',
    key_down: 'key_down',
    key_up: 'key_up',
    more_opts: "Plus d'options",
    url: 'url',
    width: 'width',
    height: 'height'
  },
  misc: {
    powered_by: 'powered_by'
  },
  ui: {
    toggle_stroke_tools: "Montrer/cacher plus d'outils de contour",
    palette_info: 'palette_info',
    zoom_level: 'zoom_level',
    panel_drag: 'panel_drag'
  },
  properties: {
    id: "Identifier l'élément",
    fill_color: 'fill_color',
    stroke_color: 'stroke_color',
    stroke_style: 'stroke_style',
    stroke_width: 'stroke_width',
    pos_x: "Changer l'abscisse (coordonnée X)",
    pos_y: "Changer l'ordonnée (coordonnée Y)",
    linecap_butt: 'linecap_butt',
    linecap_round: 'linecap_round',
    linecap_square: 'linecap_square',
    linejoin_bevel: 'linejoin_bevel',
    linejoin_miter: 'linejoin_miter',
    linejoin_round: 'linejoin_round',
    angle: "Changer l'angle de rotation",
    blur: 'blur',
    opacity: "Changer l'opacité de l'élément sélectionné",
    circle_cx: 'circle_cx',
    circle_cy: 'circle_cy',
    circle_r: 'circle_r',
    ellipse_cx: "Changer la position horizontale cx de l'ellipse",
    ellipse_cy: "Changer la position verticale cy de l'ellipse",
    ellipse_rx: "Changer le rayon horizontal x de l'ellipse",
    ellipse_ry: "Changer le rayon vertical y de l'ellipse",
    line_x1: 'line_x1',
    line_x2: 'line_x2',
    line_y1: 'line_y1',
    line_y2: 'line_y2',
    rect_height: 'rect_height',
    rect_width: 'rect_width',
    corner_radius: 'corner_radius',
    image_width: "Changer la largeur de l'image",
    image_height: "Changer la hauteur de l'image",
    image_url: "Modifier l'URL",
    node_x: 'node_x',
    node_y: 'node_y',
    seg_type: 'seg_type',
    straight_segments: 'straight_segments',
    curve_segments: 'curve_segments',
    text_contents: 'text_contents',
    font_family: 'font_family',
    font_size: 'font_size',
    bold: 'bold',
    italic: 'italic'
  },
  tools: {
    main_menu: 'main_menu',
    bkgnd_color_opac: "Changer la couleur d'arrière-plan/l'opacité",
    connector_no_arrow: 'connector_no_arrow',
    fitToContent: 'fitToContent',
    fit_to_all: "Ajuster à l'ensemble du contenu",
    fit_to_canvas: 'fit_to_canvas',
    fit_to_layer_content: 'fit_to_layer_content',
    fit_to_sel: 'fit_to_sel',
    align_relative_to: 'align_relative_to',
    relativeTo: 'relativeTo',
    page: 'page',
    largest_object: 'largest_object',
    selected_objects: 'selected_objects',
    smallest_object: 'smallest_object',
    new_doc: 'new_doc',
    open_doc: 'open_doc',
    export_img: 'export_img',
    save_doc: "Enregistrer l'image",
    import_doc: 'import_doc',
    align_to_page: "Aligner l'élément à la page",
    align_bottom: 'align_bottom',
    align_center: 'align_center',
    align_left: 'align_left',
    align_middle: 'align_middle',
    align_right: 'align_right',
    align_top: 'align_top',
    mode_select: 'mode_select',
    mode_fhpath: 'mode_fhpath',
    mode_line: 'mode_line',
    mode_connect: 'mode_connect',
    mode_rect: 'mode_rect',
    mode_square: 'mode_square',
    mode_fhrect: 'mode_fhrect',
    mode_ellipse: 'mode_ellipse',
    mode_circle: 'mode_circle',
    mode_fhellipse: 'mode_fhellipse',
    mode_path: 'mode_path',
    mode_shapelib: "Bibliothèque d'images",
    mode_text: 'mode_text',
    mode_image: 'mode_image',
    mode_zoom: 'mode_zoom',
    mode_eyedropper: 'mode_eyedropper',
    no_embed: 'no_embed',
    undo: 'undo',
    redo: 'redo',
    tool_source: 'tool_source',
    wireframe_mode: 'wireframe_mode',
    toggle_grid: 'toggle_grid',
    clone: 'clone',
    del: 'del',
    group_elements: 'group_elements',
    make_link: 'make_link',
    set_link_url: "Définir l'URL du lien (laisser vide pour supprimer)",
    to_path: 'to_path',
    reorient_path: 'reorient_path',
    ungroup: 'ungroup',
    docprops: 'docprops',
    imagelib: "Bibliothèque d'images",
    move_bottom: 'move_bottom',
    move_top: 'move_top',
    node_clone: 'node_clone',
    node_delete: 'node_delete',
    node_link: 'node_link',
    add_subpath: 'add_subpath',
    openclose_path: 'openclose_path',
    source_save: 'source_save',
    cut: 'cut',
    copy: 'copy',
    paste: 'paste',
    paste_in_place: 'paste_in_place',
    delete: 'delete',
    group: 'group',
    move_front: 'move_front',
    move_up: "Avancer d'un plan",
    move_down: "Reculer d'un plan",
    move_back: 'move_back'
  },
  layers: {
    layer: 'layer',
    layers: 'layers',
    del: 'del',
    move_down: 'move_down',
    new: 'new',
    rename: 'rename',
    move_up: 'move_up',
    dupe: 'dupe',
    merge_down: 'merge_down',
    merge_all: 'merge_all',
    move_elems_to: 'move_elems_to',
    move_selected: 'move_selected'
  },
  config: {
    image_props: "Propriétés de l'image",
    doc_title: 'doc_title',
    doc_dims: 'doc_dims',
    included_images: 'included_images',
    image_opt_embed: 'image_opt_embed',
    image_opt_ref: "Utiliser l'adresse des fichiers",
    editor_prefs: "Préférences de l'éditeur",
    icon_size: 'icon_size',
    language: 'language',
    background: "Toile de fond de l'éditeur",
    editor_img_url: 'editor_img_url',
    editor_bg_note: "Note : La toile de fond ne sera pas sauvegardée avec l'image.",
    icon_large: 'icon_large',
    icon_medium: 'icon_medium',
    icon_small: 'icon_small',
    icon_xlarge: 'icon_xlarge',
    select_predefined: 'select_predefined',
    units_and_rulers: 'units_and_rulers',
    show_rulers: 'show_rulers',
    base_unit: 'base_unit',
    grid: 'grid',
    snapping_onoff: 'snapping_onoff',
    snapping_stepsize: "Pas d'ancrage :",
    grid_color: 'grid_color'
  },
  shape_cats: {
    basic: 'basic',
    object: 'object',
    symbol: 'symbol',
    arrow: 'arrow',
    flowchart: 'flowchart',
    animal: 'animal',
    game: 'game',
    dialog_balloon: 'dialog_balloon',
    electronics: 'electronics',
    math: 'math',
    music: 'music',
    misc: 'misc',
    raphael_1: 'raphael_1',
    raphael_2: 'raphael_2'
  },
  imagelib: {
    select_lib: "Choisir une bibliothèque d'images",
    show_list: 'show_list',
    import_single: 'import_single',
    import_multi: 'import_multi',
    open: 'open'
  },
  notification: {
    invalidAttrValGiven: 'invalidAttrValGiven',
    noContentToFitTo: "Il n'y a pas de contenu auquel ajuster",
    dupeLayerName: 'dupeLayerName',
    enterUniqueLayerName: 'enterUniqueLayerName',
    enterNewLayerName: 'enterNewLayerName',
    layerHasThatName: 'layerHasThatName',
    QmoveElemsToLayer: 'QmoveElemsToLayer',
    QwantToClear: "Voulez-vous effacer le dessin ?\nL'historique de vos actions sera également effacé !",
    QwantToOpen: "Voulez-vous ouvrir un nouveau document ?\nVous perdrez l'historique de vos modifications !",
    QerrorsRevertToSource: 'QerrorsRevertToSource',
    QignoreSourceChanges: 'QignoreSourceChanges',
    featNotSupported: 'featNotSupported',
    enterNewImgURL: "Entrer la nouvelle URL de l'image",
    defsFailOnSave: "NOTE : En raison d'un bogue dans votre navigateur, il se peut que cette image ne soit pas correctement affichée (dégradés ou éléments manquants). Le souci sera néanmoins réglé à la sauvegarde.",
    loadingImage: "Chargement de l'image, veuillez patienter…",
    saveFromBrowser: "Sélectionner « Enregistrer sous… » dans votre navigateur pour sauvegarder l'image en tant que fichier %s.",
    noteTheseIssues: 'noteTheseIssues',
    unsavedChanges: 'unsavedChanges',
    enterNewLinkURL: "Entrez la nouvelle URL de l'hyperlien",
    errorLoadingSVG: 'errorLoadingSVG',
    URLloadFail: "Impossible de charger l'URL",
    retrieving: 'retrieving'
  },
  confirmSetStorage: {
    message: "Par défaut et si supporté, SVG-Edit peut stocker les préférences de l'éditeur " +
    "et le contenu SVG localement sur votre machine de sorte que vous n'ayez pas besoin de les " +
    'rajouter chaque fois que vous chargez SVG-Edit. Si, pour des raisons de confidentialité, ' +
    'vous ne souhaitez pas stocker ces données sur votre machine, vous pouvez changer ce ' +
    'comportement ci-dessous.',
    storagePrefsAndContent: 'storagePrefsAndContent',
    storagePrefsOnly: 'storagePrefsOnly',
    storagePrefs: 'storagePrefs',
    storageNoPrefsOrContent: 'storageNoPrefsOrContent',
    storageNoPrefs: 'storageNoPrefs',
    rememberLabel: 'rememberLabel',
    rememberTooltip: "Si vous choisissez de désactiver le stockage en mémorisant le choix, l'URL va changer afin que la question ne vous soit plus reposée."
  }
});
