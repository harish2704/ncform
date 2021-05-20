import ncformUtils from "./ncform-utils";
import ValidationRule from "./validation-rule";

import vueControlMixin from "./mixins/vue/control-mixin";
import vueLayoutObjectMixin from "./mixins/vue/layout-object-mixin";
import vueLayoutArrayMixin from "./mixins/vue/layout-array-mixin";

const exportObj = {
  ncformUtils,
  ValidationRule,
  mixins: {
    vue: {
      controlMixin: vueControlMixin,
      layoutObjectMixin: vueLayoutObjectMixin,
      layoutArrayMixin: vueLayoutArrayMixin
    }
  }
};
module.exports = exportObj;
export const mixins = exportObj.mixins;
export {ncformUtils,ValidationRule };
