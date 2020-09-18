window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png1";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "specialGameFont";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 54;
		this.width = 54;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","width",46),
					new eui.SetProperty("_Image1","height",46)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7),
					new eui.SetProperty("_Image1","source","common_xuanzhong2_png"),
					new eui.SetProperty("_Image1","width",46),
					new eui.SetProperty("_Image1","height",46),
					new eui.SetProperty("labelDisplay","size",24)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","common_xuanzhong_png"),
					new eui.SetProperty("_Image1","width",46),
					new eui.SetProperty("_Image1","height",46)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","common_xuanzhong_png"),
					new eui.SetProperty("_Image1","width",46),
					new eui.SetProperty("_Image1","height",46)
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "common_xuanzhong2_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x4c2703;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("textDisplay","height",30)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "specialGameFont";
		t.left = "10";
		t.right = "10";
		t.size = 30;
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "specialGameFont";
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 24;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/ServerListTextInputSkin.exml'] = window.ServerListTextInputSkin = (function (_super) {
	__extends(ServerListTextInputSkin, _super);
	function ServerListTextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("textDisplay","height",30)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = ServerListTextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.fontFamily = "specialGameFont";
		t.left = "10";
		t.right = "10";
		t.size = 30;
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.fontFamily = "specialGameFont";
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 24;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return ServerListTextInputSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/CheckBoxLoginSkin.exml'] = window.CheckBoxLoginSkin = (function (_super) {
	__extends(CheckBoxLoginSkin, _super);
	function CheckBoxLoginSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","loginPanel_json.serverlist_goukunag")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7),
					new eui.SetProperty("_Image1","source","loginPanel_json.serverlist_goukunag2")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","loginPanel_json.serverlist_goukunag2")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","alpha",0.7),
					new eui.SetProperty("_Image1","source","loginPanel_json.serverlist_goukunag2")
				])
		];
	}
	var _proto = CheckBoxLoginSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "loginPanel_json.serverlist_goukunag";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = false;
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x5a2e2b;
		t.verticalAlign = "middle";
		t.x = 17;
		return t;
	};
	return CheckBoxLoginSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/CommonTipSkin.exml'] = window.CommonTipSkin = (function (_super) {
	__extends(CommonTipSkin, _super);
	function CommonTipSkin() {
		_super.call(this);
		this.skinParts = ["img_bg","img_icon","lbl_tipMsg","common_g","content"];
		
		this.height = 45;
		this.elementsContent = [this.content_i()];
	}
	var _proto = CommonTipSkin.prototype;

	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.height = 45;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.common_g_i()];
		return t;
	};
	_proto.common_g_i = function () {
		var t = new eui.Group();
		this.common_g = t;
		t.height = 45;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.img_bg_i(),this._Group1_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.left = 0;
		t.right = 0;
		t.source = "preloading_ui_ty_tishikuang_png";
		t.y = -4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 45;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_icon_i(),this.lbl_tipMsg_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 45;
		t.x = -205;
		t.y = 10;
		return t;
	};
	_proto.lbl_tipMsg_i = function () {
		var t = new eui.Label();
		this.lbl_tipMsg = t;
		t.fontFamily = "specialGameFont";
		t.height = 40;
		t.multiline = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 1;
		t.text = "";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.wordWrap = false;
		t.x = 100;
		t.y = 3;
		return t;
	};
	return CommonTipSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/GameLoadingProgressBarSkin.exml'] = window.GameLoadingProgressBarSkin = (function (_super) {
	__extends(GameLoadingProgressBarSkin, _super);
	function GameLoadingProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["imgProgressBg","imgProgress","imgCloud","labHint"];
		
		this.height = 123;
		this.width = 600;
		this.elementsContent = [this.imgProgressBg_i(),this.imgProgress_i(),this.imgCloud_i(),this.labHint_i()];
	}
	var _proto = GameLoadingProgressBarSkin.prototype;

	_proto.imgProgressBg_i = function () {
		var t = new eui.Image();
		this.imgProgressBg = t;
		t.scale9Grid = new egret.Rectangle(59,6,3,42);
		t.source = "preloading_ui_jindu_di_png";
		t.width = 600;
		t.y = 33;
		return t;
	};
	_proto.imgProgress_i = function () {
		var t = new eui.Image();
		this.imgProgress = t;
		t.fillMode = "repeat";
		t.scale9Grid = new egret.Rectangle(15,3,40,19);
		t.source = "preloading_ui_denglu_jindu_png";
		t.width = 0;
		t.x = 35;
		t.y = 48;
		return t;
	};
	_proto.imgCloud_i = function () {
		var t = new eui.Image();
		this.imgCloud = t;
		t.source = "preloading_ui_denglu_yun_png";
		t.y = -41;
		return t;
	};
	_proto.labHint_i = function () {
		var t = new eui.Label();
		this.labHint = t;
		t.fontFamily = "specialGameFont";
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 1;
		t.strokeColor = 0xc89f64;
		t.text = "首次加载时间稍长，请耐心等待";
		t.textColor = 0xffffff;
		t.y = 89;
		return t;
	};
	return GameLoadingProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/GameLoadingViewSkin.exml'] = window.GameLoadingViewSkin = (function (_super) {
	__extends(GameLoadingViewSkin, _super);
	function GameLoadingViewSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","progressBar1","progressBar2","labRefresh"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.imgBg_i(),this.progressBar1_i(),this.progressBar2_i(),this.labRefresh_i(),this._Label1_i()];
		this.states = [
			new eui.State ("loginPrevLoad",
				[
					new eui.SetProperty("progressBar1","visible",false),
					new eui.SetProperty("progressBar2","visible",false)
				])
			,
			new eui.State ("loginSuccessLoad",
				[
					new eui.SetProperty("labRefresh","size",24)
				])
		];
	}
	var _proto = GameLoadingViewSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 1624;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.progressBar1_i = function () {
		var t = new qmr.GameLoadingProgressBar();
		this.progressBar1 = t;
		t.bottom = 333;
		t.horizontalCenter = 0;
		t.skinName = "GameLoadingProgressBarSkin";
		t.visible = true;
		return t;
	};
	_proto.progressBar2_i = function () {
		var t = new qmr.GameLoadingProgressBar();
		this.progressBar2 = t;
		t.bottom = 199;
		t.horizontalCenter = 0;
		t.skinName = "GameLoadingProgressBarSkin";
		t.visible = true;
		return t;
	};
	_proto.labRefresh_i = function () {
		var t = new eui.Label();
		this.labRefresh = t;
		t.bottom = 158;
		t.fontFamily = "specialGameFont";
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 1;
		t.strokeColor = 0xc89f64;
		t.text = "若长时间加载不成功，请点击刷新界面";
		t.textColor = 0xffffff;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 35;
		t.fontFamily = "specialGameFont";
		t.height = 45;
		t.horizontalCenter = 12;
		t.lineSpacing = 10;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0x842813;
		t.text = "抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活";
		t.textAlign = "left";
		t.visible = true;
		t.width = 510;
		t.wordWrap = true;
		return t;
	};
	return GameLoadingViewSkin;
})(eui.Skin);generateEUI.paths['resource/login_skins/LoginViewSkin.exml'] = window.LoginViewSkin = (function (_super) {
	__extends(LoginViewSkin, _super);
	function LoginViewSkin() {
		_super.call(this);
		this.skinParts = ["imgWindSlow","imgWindFast","imgWindMiddle","groupWind","lbUserBook","lbPrivacyPolicy","gpRead","txt_account","groupAccount","btn_login"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LoginViewSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.groupWind_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -1;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1022_map_jpg";
		t.top = 1;
		return t;
	};
	_proto.groupWind_i = function () {
		var t = new eui.Group();
		this.groupWind = t;
		t.bottom = 0;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 750;
		t.x = 0;
		t.y = -468;
		t.elementsContent = [this.imgWindSlow_i(),this.imgWindFast_i(),this.imgWindMiddle_i()];
		return t;
	};
	_proto.imgWindSlow_i = function () {
		var t = new eui.Image();
		this.imgWindSlow = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.y = 248.48;
		return t;
	};
	_proto.imgWindFast_i = function () {
		var t = new eui.Image();
		this.imgWindFast = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.y = 517.88;
		return t;
	};
	_proto.imgWindMiddle_i = function () {
		var t = new eui.Image();
		this.imgWindMiddle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 10;
		t.y = 856.06;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 8;
		t.verticalCenter = 92.5;
		t.elementsContent = [this._Image2_i(),this.gpRead_i(),this.groupAccount_i(),this.btn_login_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(89,71,13,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loginPanel_json.login_bg";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.gpRead_i = function () {
		var t = new eui.Group();
		this.gpRead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.y = 328;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.lbUserBook_i(),this._Label2_i(),this.lbPrivacyPolicy_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "loginPanel_json.point";
		t.x = 5;
		t.y = 9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x842813;
		t.text = "我已详细阅读并同意";
		t.x = 288;
		t.y = 13;
		return t;
	};
	_proto.lbUserBook_i = function () {
		var t = new eui.Label();
		this.lbUserBook = t;
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x150F00;
		t.text = "用户手册";
		t.textColor = 0xFFCC66;
		t.x = 458;
		t.y = 23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x842813;
		t.text = "和";
		t.x = 418;
		t.y = 13;
		return t;
	};
	_proto.lbPrivacyPolicy_i = function () {
		var t = new eui.Label();
		this.lbPrivacyPolicy = t;
		t.fontFamily = "specialGameFont";
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0x150F00;
		t.text = "隐私协议";
		t.textColor = 0xFFCC66;
		t.x = 448;
		t.y = 13;
		return t;
	};
	_proto.groupAccount_i = function () {
		var t = new eui.Group();
		this.groupAccount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.horizontalCenter = 11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.width = 432;
		t.y = 80;
		t.elementsContent = [this.txt_account_i(),this._Label3_i()];
		return t;
	};
	_proto.txt_account_i = function () {
		var t = new eui.TextInput();
		this.txt_account = t;
		t.anchorOffsetX = 0;
		t.maxChars = 35;
		t.prompt = "请输入账号";
		t.skinName = "ServerListTextInputSkin";
		t.width = 270;
		t.x = 123;
		t.y = 25;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "specialGameFont";
		t.size = 28;
		t.stroke = 1;
		t.text = "账号:";
		t.textColor = 0x000000;
		t.x = 38;
		t.y = 32;
		return t;
	};
	_proto.btn_login_i = function () {
		var t = new eui.Image();
		this.btn_login = t;
		t.horizontalCenter = 3.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loginPanel_json.ui_denglu_anniu";
		t.verticalCenter = 46;
		return t;
	};
	return LoginViewSkin;
})(eui.Skin);