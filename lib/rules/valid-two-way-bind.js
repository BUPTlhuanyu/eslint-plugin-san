/**
 * @author BUPTlhuanyu
 */
'use strict';

/* eslint-disable */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const utils = require('../utils');
const EXPRESSION_TYPE = require('../utils/expr');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'enforce valid two-way binding directives',
            categories: ['essential'],
            url: 'https://ecomfe.github.io/eslint-plugin-san/rules/valid-two-way-bind.html'
        },
        fixable: null,
        schema: []
    },
    /** @param {RuleContext} context */
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {
            /** @param {VDirective} node */
            'VAttribute[directive=true]'(node) {
                debugger;
                if (
                    node &&
                    node.value &&
                    node.value.expression &&
                    EXPRESSION_TYPE.indexOf(node.value.expression.type) === -1
                ) {
                    const type = ` ${node.value.expression.type}` || '';
                    context.report({
                        node: node.value,
                        range: node.value.range,
                        message: "two-way binding directives do not support this expression{{type}}.",
                        data: {
                            type
                        }
                    })
                }
            }
        });
    }
};
 