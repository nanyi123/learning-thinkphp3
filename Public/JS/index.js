(function($) {
    $.fn.combotree.defaults.editable = true;
    $.extend($.fn.combotree.defaults.keyHandler, {
        query: function (q) {
            var t = $(this).combotree('tree');
            t.tree("search", q);
        }
    });
    $.extend($.fn.tree.methods, {

        search: function (jqTree, searchText) {
            var tree = this;

            var nodeList = getAllNodes(jqTree, tree);

            searchText = $.trim(searchText);
            if (searchText == "") {
                for (var i = 0; i < nodeList.length; i++) {
                    $(".tree-node-targeted",
                        nodeList[i].target).removeClass("tree-node-targeted");
                    $(nodeList[i].target).show();
                }

                var selectedNode = tree.getSelected(jqTree);
                if (selectedNode) {
                    tree.expandTo(jqTree, selectedNode.target);
                }
                return;
            }
            //搜索匹配的节点并高亮显示
            var matchedNodeList = [];
            if (nodeList && nodeList.length > 0) {
                var node = null;
                for (var i = 0; i < nodeList.length; i++) {
                    node = nodeList[i];
                    if (isMatch(searchText, node.text)) {
                        matchedNodeList.push(node);
                    }
                }
                //隐藏所有节点
                for (var i = 0; i < nodeList.length; i++) {
                    $(".tree-node-targeted", nodeList[i].target).removeClass("tree-node-targeted");
                    $(nodeList[i].target).hide();
                }
                //折叠所有节点
                tree.collapseAll(jqTree);
                //展示所有匹配的节点以及父节点


                for (var i = 0; i < matchedNodeList.length; i++) {
                    showMatchedNode(jqTree, tree, matchedNodeList[i]);
                }
            }
        },


        showChildren: function (jqTree, node) {

            var tree = this;

            if (!tree.isLeaf(jqTree, node.target)) {
                var children = tree.getChildren(jqTree, node.target);
                if (children && children.length > 0) {
                    for (var i = 0; i < children.length; i++) {
                        if ($(children[i].target).is(":hidden")) {
                            $(children[i].target).show();
                        }
                    }
                }
            }
        },

        scrollTo: function (jqTree, param) {
            //easyui tree的tree对象。可以通过tree.methodName(jqTree)方式调用easyui tree的方法
            var tree = this;
            //如果node为空，则获取当前选中的node
            var targetNode = param && param.targetNode ? param.targetNode : tree.getSelected(jqTree);
            if (targetNode != null) {
                //判断节点是否在可视区域                 var root = tree.getRoot(jqTree);
                var $targetNode = $(targetNode.target);
                var Container = param && param.treeContainer ? param.treeContainer : jqTree.parent();
                var containerH = container.height();
                var nodeOffsetHeight = $targetNode.offset().top - container.offset().top;
                if (nodeOffsetHeight > (containerH - 30)) {
                    var scrollHeight = container.scrollTop() + nodeOffsetHeight - containerH + 30;
                    container.scrollTop(scrollHeight);
                }
            }
        }
    });

    function showMatchedNode(jqTree, tree, node) {
        //展示所有父节点
        $(node.target).show();
        $(".tree-title", node.target).addClass("tree-node-targeted");
        var pNode = node;
        while ((pNode = tree.getParent(jqTree, pNode.target))) {
            $(pNode.target).show();
        }
        //展开到该节点
        tree.expandTo(jqTree, node.target);
        //如果是非叶子节点，需折叠该节点的所有子节点
        if (!tree.isLeaf(jqTree, node.target)) {
            tree.collapse(jqTree, node.target);
        }
    }

    function isMatch(searchText, targetText) {
        return $.trim(targetText) != "" && targetText.indexOf(searchText) != -1;
    }

    function getAllNodes(jqTree, tree) {
        var allNodeList = jqTree.data("allNodeList");
        if (!allNodeList) {
            var roots = tree.getRoots(jqTree);
            allNodeList = getChildNodeList(jqTree, tree, roots);
            jqTree.data("allNodeList", allNodeList);
        }
        return allNodeList;
    }

    function getChildNodeList(jqTree, tree, nodes) {
        var childNodeList = [];
        if (nodes && nodes.length > 0) {
            var node = null;
            for (var i = 0; i < nodes.length; i++) {
                node = nodes[i];
                childNodeList.push(node);
                if (!tree.isLeaf(jqTree, node.target)) {
                    var children = tree.getChildren(jqTree, node.target);
                    childNodeList = childNodeList.concat(getChildNodeList(jqTree, tree, children));
                }
            }
        }
        return childNodeList;
    }
})(jQuery);