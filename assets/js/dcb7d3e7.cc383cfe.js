(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5886],{3905:function(n,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return d}});var t=a(67294);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,t,l=function(n,e){if(null==n)return{};var a,t,l={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var s=t.createContext({}),p=function(n){var e=t.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},u=function(n){var e=p(n.components);return t.createElement(s.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,l=n.mdxType,i=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),c=p(a),d=l,k=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return a?t.createElement(k,r(r({ref:e},u),{},{components:a})):t.createElement(k,r({ref:e},u))}));function d(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90683:function(n,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var t=a(22122),l=a(19756),i=(a(67294),a(3905)),r=["components"],o={title:"Map"},s={unversionedId:"java/collection/Map",id:"java/collection/Map",isDocsHomePage:!1,title:"Map",description:"Map.class",source:"@site/docs/java/collection/Map.md",sourceDirName:"java/collection",slug:"/java/collection/Map",permalink:"/docs.advanced.way/docs/java/collection/Map",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/java/collection/Map.md",version:"current",lastUpdatedAt:1625551523,formattedLastUpdatedAt:"7/6/2021",frontMatter:{title:"Map"},sidebar:"java",previous:{title:"List",permalink:"/docs.advanced.way/docs/java/collection/List"},next:{title:"\u9ad8\u5e76\u53d1",permalink:"/docs.advanced.way/docs/java/hc/\u9ad8\u5e76\u53d1"}},p=[{value:"Map.class",id:"mapclass",children:[{value:"\u5d4c\u5957\u63a5\u53e3",id:"\u5d4c\u5957\u63a5\u53e3",children:[]}]},{value:"HashMap.class",id:"hashmapclass",children:[{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",children:[]},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",children:[]},{value:"\u6e90\u7801",id:"\u6e90\u7801",children:[]},{value:"hash",id:"hash",children:[]},{value:"\u4e3a\u4ec0\u4e48\u4f1ahash\u51b2\u7a81",id:"\u4e3a\u4ec0\u4e48\u4f1ahash\u51b2\u7a81",children:[]},{value:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u8868\u73b0",id:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u8868\u73b0",children:[]}]},{value:"LinkedHashMap.class",id:"linkedhashmapclass",children:[{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe-1",children:[]},{value:"\u6e90\u7801",id:"\u6e90\u7801-1",children:[]}]},{value:"\u53c2\u8003\u5185\u5bb9",id:"\u53c2\u8003\u5185\u5bb9",children:[]}],u={toc:p};function h(n){var e=n.components,o=(0,l.Z)(n,r);return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mapclass"},"Map.class"),(0,i.kt)("p",null,"HashMap\u662fMap\u63a5\u53e3\u57fa\u4e8e\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0\u3002\n\u8fd9\u79cd\u5b9e\u73b0\u63d0\u4f9b\u4e86\u6240\u6709\u53ef\u9009\u7684Map\u64cd\u4f5c\uff0c\u5e76\u5141\u8bb8key\u548cvalue\u4e3anull\uff08\u9664\u4e86HashMap\u662funsynchronized\u7684\u548c\u5141\u8bb8\u4f7f\u7528null\u5916\uff0cHashMap\u548cHashTable\u5927\u81f4\u76f8\u540c\u3002\uff09\u3002"),(0,i.kt)("p",null,"\u4e0d\u4fdd\u8bc1\u6620\u5c04\u7684\u987a\u5e8f\uff0c\u7279\u522b\u662f\u5b83\u4e0d\u4fdd\u8bc1\u8be5\u987a\u5e8f\u6052\u4e45\u4e0d\u53d8\u3002"),(0,i.kt)("p",null,"\u6b64\u5b9e\u73b0\u5047\u8bbe\u54c8\u5e0c\u51fd\u6570\u5728\u6876\u5185\u9002\u5f53\u5730\u5206\u5e03\u5143\u7d20\uff0c\u4e3a\u57fa\u672c\u5b9e\u73b0(get \u548c put)\u63d0\u4f9b\u4e86\u7a33\u5b9a\u7684\u6027\u80fd\u3002\u8fed\u4ee3 collection \u89c6\u56fe\u6240\u9700\u7684\u65f6\u95f4\u4e0e HashMap \u5b9e\u4f8b\u7684\u201c\u5bb9\u91cf\u201d\uff08\u6876\u7684\u6570\u91cf\uff09\u53ca\u5176\u5927\u5c0f\uff08\u952e-\u503c\u6620\u5c04\u5173\u7cfb\u6570\uff09\u6210\u6bd4\u4f8b\u3002\u5982\u679c\u904d\u5386\u64cd\u4f5c\u5f88\u91cd\u8981\uff0c\u5c31\u4e0d\u8981\u628a\u521d\u59cb\u5316\u5bb9\u91cfinitial capacity\u8bbe\u7f6e\u5f97\u592a\u9ad8\uff08\u6216\u5c06\u52a0\u8f7d\u56e0\u5b50load factor\u8bbe\u7f6e\u5f97\u592a\u4f4e\uff09\uff0c\u5426\u5219\u4f1a\u4e25\u91cd\u964d\u4f4e\u904d\u5386\u7684\u6548\u7387\u3002"),(0,i.kt)("p",null,"HashMap\u6709\u4e24\u4e2a\u5f71\u54cd\u6027\u80fd\u7684\u91cd\u8981\u53c2\u6570\uff1a\u521d\u59cb\u5316\u5bb9\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"initial capacity")," \u3001\u52a0\u8f7d\u56e0\u5b50 ",(0,i.kt)("inlineCode",{parentName:"p"},"load factor"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u662f\u54c8\u5e0c\u8868\u4e2d\u6876\u7684\u6570\u91cf\uff0c\u521d\u59cb\u5bb9\u91cf\u53ea\u662f\u54c8\u5e0c\u8868\u5728\u521b\u5efa\u65f6\u7684\u5bb9\u91cf\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u56e0\u5b50\u662f\u54c8\u5e0c\u8868\u5728\u5176\u5bb9\u91cf\u81ea\u52a8\u589e\u52a0\u4e4b\u524d\u53ef\u4ee5\u8fbe\u5230\u591a\u6ee1\u7684\u4e00\u79cd\u5c3a\u5ea6\u3002")),(0,i.kt)("p",null,"initial capacity ",(0,i.kt)("em",{parentName:"p"}," load factor \u5c31\u662f\u5f53\u524d\u5141\u8bb8\u7684\u6700\u5927\u5143\u7d20\u6570\u76ee\uff0c\u8d85\u8fc7initial capacity"),"load factor\u4e4b\u540e\uff0cHashMap\u5c31\u4f1a\u8fdb\u884crehashed\u64cd\u4f5c\u6765\u8fdb\u884c\u6269\u5bb9\uff0c\u6269\u5bb9\u540e\u7684\u7684\u5bb9\u91cf\u4e3a\u4e4b\u524d\u7684\u4e24\u500d\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u9ed8\u8ba4\u52a0\u8f7d\u56e0\u5b50 (0.75) \u5728\u65f6\u95f4\u548c\u7a7a\u95f4\u6210\u672c\u4e0a\u5bfb\u6c42\u4e00\u79cd\u6298\u8877\u3002\u52a0\u8f7d\u56e0\u5b50\u8fc7\u9ad8\u867d\u7136\u51cf\u5c11\u4e86\u7a7a\u95f4\u5f00\u9500\uff0c\u4f46\u540c\u65f6\u4e5f\u589e\u52a0\u4e86\u67e5\u8be2\u6210\u672c\uff08\u5728\u5927\u591a\u6570 HashMap\u7c7b\u7684\u64cd\u4f5c\u4e2d\uff0c\u5305\u62ec get \u548c put \u64cd\u4f5c\uff0c\u90fd\u53cd\u6620\u4e86\u8fd9\u4e00\u70b9\uff09\u3002"),(0,i.kt)("p",null,"\u5728\u8bbe\u7f6e\u521d\u59cb\u5bb9\u91cf\u65f6\u5e94\u8be5\u8003\u8651\u5230\u6620\u5c04\u4e2d\u6240\u9700\u7684\u6761\u76ee\u6570\u53ca\u5176\u52a0\u8f7d\u56e0\u5b50\uff0c\u4ee5\u4fbf\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11rehash\u64cd\u4f5c\u6b21\u6570\u3002\u5982\u679c\u521d\u59cb\u5bb9\u91cf\u5927\u4e8e\u6700\u5927\u6761\u76ee\u6570\u9664\u4ee5\u52a0\u8f7d\u56e0\u5b50\uff0c\u5219\u4e0d\u4f1a\u53d1\u751frehash \u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5f88\u591a\u6620\u5c04\u5173\u7cfb\u8981\u5b58\u50a8\u5728 HashMap \u5b9e\u4f8b\u4e2d\uff0c\u5219\u76f8\u5bf9\u4e8e\u6309\u9700\u6267\u884c\u81ea\u52a8\u7684 rehash \u64cd\u4f5c\u4ee5\u589e\u5927\u8868\u7684\u5bb9\u91cf\u6765\u8bf4\uff0c\u4f7f\u7528\u8db3\u591f\u5927\u7684\u521d\u59cb\u5bb9\u91cf\u521b\u5efa\u5b83\u5c06\u4f7f\u5f97\u6620\u5c04\u5173\u7cfb\u80fd\u66f4\u6709\u6548\u5730\u5b58\u50a8\u3002\n\u6ce8\u610f\uff0c\u6b64\u5b9e\u73b0\u4e0d\u662f\u540c\u6b65\u7684\u3002\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u4e00\u4e2a\u54c8\u5e0c\u6620\u5c04\uff0c\u800c\u5176\u4e2d\u81f3\u5c11\u4e00\u4e2a\u7ebf\u7a0b\u4ece\u7ed3\u6784\u4e0a\u4fee\u6539\u4e86\u8be5\u6620\u5c04\uff0c\u5219\u5b83\u5fc5\u987b\u4fdd\u6301\u5916\u90e8\u540c\u6b65\u3002\uff08\u7ed3\u6784\u4e0a\u7684\u4fee\u6539\u662f\u6307\u6dfb\u52a0\u6216\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u6620\u5c04\u5173\u7cfb\u7684\u4efb\u4f55\u64cd\u4f5c\uff1b\u4ec5\u6539\u53d8\u4e0e\u5b9e\u4f8b\u5df2\u7ecf\u5305\u542b\u7684\u952e\u5173\u8054\u7684\u503c\u4e0d\u662f\u7ed3\u6784\u4e0a\u7684\u4fee\u6539\u3002\uff09\u8fd9\u4e00\u822c\u901a\u8fc7\u5bf9\u81ea\u7136\u5c01\u88c5\u8be5\u6620\u5c04\u7684\u5bf9\u8c61\u8fdb\u884c\u540c\u6b65\u64cd\u4f5c\u6765\u5b8c\u6210\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u5bf9\u8c61\uff0c\u5219\u5e94\u8be5\u4f7f\u7528 Collections.synchronizedMap \u65b9\u6cd5\u6765\u201c\u5305\u88c5\u201d\u8be5\u6620\u5c04\u3002\u6700\u597d\u5728\u521b\u5efa\u65f6\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\uff0c\u4ee5\u9632\u6b62\u5bf9\u6620\u5c04\u8fdb\u884c\u610f\u5916\u7684\u975e\u540c\u6b65\u8bbf\u95ee\uff0c\n\u5982\u4e0b\u6240\u793a\uff1a\nMap m = Collections.synchronizedMap(new HashMap(\u2026));"),(0,i.kt)("p",null,"\u7531\u6240\u6709\u6b64\u7c7b\u7684\u201ccollection \u89c6\u56fe\u65b9\u6cd5\u201d\u6240\u8fd4\u56de\u7684\u8fed\u4ee3\u5668\u90fd\u662ffail-fast \u7684\uff1a\u5728\u8fed\u4ee3\u5668\u521b\u5efa\u4e4b\u540e\uff0c\u5982\u679c\u4ece\u7ed3\u6784\u4e0a\u5bf9\u6620\u5c04\u8fdb\u884c\u4fee\u6539\uff0c\u9664\u975e\u901a\u8fc7\u8fed\u4ee3\u5668\u672c\u8eab\u7684remove\u65b9\u6cd5\uff0c\u5176\u4ed6\u4efb\u4f55\u65f6\u95f4\u4efb\u4f55\u65b9\u5f0f\u7684\u4fee\u6539\uff0c\u8fed\u4ee3\u5668\u90fd\u5c06\u629b\u51fa ConcurrentModificationException\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u9762\u5bf9\u5e76\u53d1\u7684\u4fee\u6539\uff0c\u8fed\u4ee3\u5668\u5f88\u5feb\u5c31\u4f1a\u5b8c\u5168\u5931\u8d25\uff0c\u800c\u4e0d\u5192\u5728\u5c06\u6765\u4e0d\u786e\u5b9a\u7684\u65f6\u95f4\u53d1\u751f\u4efb\u610f\u4e0d\u786e\u5b9a\u884c\u4e3a\u7684\u98ce\u9669\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u8fed\u4ee3\u5668\u7684\u5feb\u901f\u5931\u8d25\u884c\u4e3a\u4e0d\u80fd\u5f97\u5230\u4fdd\u8bc1\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u5b58\u5728\u975e\u540c\u6b65\u7684\u5e76\u53d1\u4fee\u6539\u65f6\uff0c\u4e0d\u53ef\u80fd\u4f5c\u51fa\u4efb\u4f55\u575a\u51b3\u7684\u4fdd\u8bc1\u3002\u5feb\u901f\u5931\u8d25\u8fed\u4ee3\u5668\u5c3d\u6700\u5927\u52aa\u529b\u629b\u51fa ConcurrentModificationException\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u7f16\u5199\u4f9d\u8d56\u4e8e\u6b64\u5f02\u5e38\u7684\u7a0b\u5e8f\u7684\u505a\u6cd5\u662f\u9519\u8bef\u7684\uff0c\u6b63\u786e\u505a\u6cd5\u662f\uff1a\u8fed\u4ee3\u5668\u7684\u5feb\u901f\u5931\u8d25\u884c\u4e3a\u5e94\u8be5\u4ec5\u7528\u4e8e\u68c0\u6d4bbug\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Map<K, V> {\n    int size();\n    boolean isEmpty();\n    boolean containsKey(Object key);\n    boolean containsValue(Object value);\n    V get(Object key);\n    V put(K key, V value);\n    V remove(Object key);\n    void putAll(Map<? extends K, ? extends V> m);\n    void clear();\n    Set<K> keySet();\n    Collection<V> values();\n    Set<Map.Entry<K, V>> entrySet();\n    boolean equals(Object o);\n    int hashCode();\n\n    interface Entry<K, V> {\n        K getKey();\n        V getValue();\n        V setValue(V value);\n        boolean equals(Object o);\n        int hashCode();\n\n        // \u6bd4\u8f83\u5668\n        public static <K extends Comparable<? super K>, V> Comparator<Map.Entry<K, V>> comparingByKey() {\n            return (Comparator<Map.Entry<K, V>> & Serializable)\n                (c1, c2) -> c1.getKey().compareTo(c2.getKey());\n        }\n\n        public static <K, V> Comparator<Map.Entry<K, V>> comparingByKey(Comparator<? super K> cmp) {\n            Objects.requireNonNull(cmp);\n            return (Comparator<Map.Entry<K, V>> & Serializable)\n                (c1, c2) -> cmp.compare(c1.getKey(), c2.getKey());\n        }\n\n        public static <K, V> Comparator<Map.Entry<K, V>> comparingByValue(Comparator<? super V> cmp) {\n            Objects.requireNonNull(cmp);\n            return (Comparator<Map.Entry<K, V>> & Serializable)\n                (c1, c2) -> cmp.compare(c1.getValue(), c2.getValue());\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"\u5d4c\u5957\u63a5\u53e3"},"\u5d4c\u5957\u63a5\u53e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b83\u662f\u903b\u8f91\u5206\u7ec4\u4ec5\u5728\u4e00\u4e2a\u5730\u65b9\u4f7f\u7528\u7684\u63a5\u53e3\u7684\u4e00\u79cd\u65b9\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b83\u589e\u52a0\u4e86\u5c01\u88c5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5d4c\u5957\u63a5\u53e3\u53ef\u4ee5\u5bfc\u81f4\u66f4\u6613\u8bfb\u548c\u53ef\u7ef4\u62a4\u7684\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5185\u90e8\u63a5\u53e3\u90fd\u662f\u9759\u6001\u7684")),(0,i.kt)("h2",{id:"hashmapclass"},"HashMap.class"),(0,i.kt)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1711).Z})),(0,i.kt)("h3",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(86805).Z})),(0,i.kt)("h3",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class HashMap<K,V> extends AbstractMap<K,V>\n    implements Map<K,V>, Cloneable, Serializable {\n    \n    // \u521d\u59cb\u5bb9\u5668\u5927\u5c0f 16\n    static final int DEFAULT_INITIAL_CAPACITY = 1 << 4;\n    // \u5bb9\u5668\u6700\u5927\u5bb9\u91cf\n    static final int MAXIMUM_CAPACITY = 1 << 30;\n    // \u8d1f\u8f7d\u56e0\u5b50\n    static final float DEFAULT_LOAD_FACTOR = 0.75f;\n    // \u6811\u5316\u9600\u503c\n    static final int TREEIFY_THRESHOLD = 8;\n    // \u6062\u590d\u6210\u94fe\u5f0f\u7ed3\u6784\u7684\u6876\u5927\u5c0f\u4e34\u754c\u503c\n    static final int UNTREEIFY_THRESHOLD = 6;\n    // \u5f53\u54c8\u5e0c\u8868\u7684\u5927\u5c0f\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\uff0c\u624d\u4f1a\u628a\u94fe\u5f0f\u7ed3\u6784\u8f6c\u5316\u6210\u6811\u578b\u7ed3\u6784\uff0c\u5426\u5219\u4ec5\u91c7\u53d6\u6269\u5bb9\u6765\u5c1d\u8bd5\u51cf\u5c11\u51b2\u7a81\u3002\n    // \u5e94\u8be5\u81f3\u5c11 4 * TREEIFY_THRESHOLD \u6765\u907f\u514d\u6269\u5bb9\u548c\u6811\u5f62\u7ed3\u6784\u5316\u4e4b\u95f4\u7684\u51b2\u7a81\n    // \u539f\u56e0: \u6570\u7ec4\u7684\u6027\u80fd\u597d\u4e8e\u6570\u7ed3\u6784\n    static final int MIN_TREEIFY_CAPACITY = 64;\n\n    // \u5bb9\u5668\u6570\u7ec4\n    transient Node<K,V>[] table;\n    transient Set<Map.Entry<K,V>> entrySet;\n    // \u5b9e\u9645\u5b58\u50a8\u7684key-value\u952e\u503c\u5bf9\u7684\u4e2a\u6570\n    transient int size;\n    // \u4fee\u6539\u6b21\u6570\n    transient int modCount;\n    // \u4e34\u754c\u503c threshold= capacity*loadFactory\n    int threshold;\n    // \u52a0\u8f7d\u56e0\u5b50\u9ed8\u8ba4\u4e3a0.75, \u5b9e\u9645\u5143\u7d20\u6bd4 \u5927\u4e8eloadFactor\u5219\u6269\u5bb9\n    final float loadFactor;\n\n    static class Node<K,V> implements Map.Entry<K,V> {\n        final int hash;\n        final K key;\n        V value;\n        Node<K,V> next;\n\n        Node(int hash, K key, V value, Node<K,V> next) {\n            this.hash = hash;\n            this.key = key;\n            this.value = value;\n            this.next = next;\n        }\n\n        public final K getKey()        { return key; }\n        public final V getValue()      { return value; }\n        public final String toString() { return key + "=" + value; }\n\n        public final int hashCode() {\n            return Objects.hashCode(key) ^ Objects.hashCode(value);\n        }\n\n        public final V setValue(V newValue) {\n            V oldValue = value;\n            value = newValue;\n            return oldValue;\n        }\n\n        public final boolean equals(Object o) {\n            if (o == this)\n                return true;\n            if (o instanceof Map.Entry) {\n                Map.Entry<?,?> e = (Map.Entry<?,?>)o;\n                if (Objects.equals(key, e.getKey()) &&\n                    Objects.equals(value, e.getValue()))\n                    return true;\n            }\n            return false;\n        }\n    }\n\n    // \u6784\u9020\u51fd\u6570 \u6307\u5b9a\u521d\u59cb\u5927\u5c0f\u548c\u8d1f\u8f7d\u56e0\u5b50\n    public HashMap(int initialCapacity, float loadFactor) {\n        if (initialCapacity < 0)\n            throw new IllegalArgumentException("Illegal initial capacity: " +\n                                               initialCapacity);\n        if (initialCapacity > MAXIMUM_CAPACITY)\n            initialCapacity = MAXIMUM_CAPACITY;\n        if (loadFactor <= 0 || Float.isNaN(loadFactor))\n            throw new IllegalArgumentException("Illegal load factor: " +\n                                               loadFactor);\n        this.loadFactor = loadFactor;\n        // \u8ba1\u7b97\u4e34\u754c\u503c\n        this.threshold = tableSizeFor(initialCapacity);\n    }\n\n    public HashMap(int initialCapacity) {\n        this(initialCapacity, DEFAULT_LOAD_FACTOR);\n    }\n\n    public HashMap() {\n        this.loadFactor = DEFAULT_LOAD_FACTOR; // all other fields defaulted\n    }\n\n    public HashMap(Map<? extends K, ? extends V> m) {\n        this.loadFactor = DEFAULT_LOAD_FACTOR;\n        putMapEntries(m, false);\n    }\n\n    static final int tableSizeFor(int cap) {\n        int n = -1 >>> Integer.numberOfLeadingZeros(cap - 1);\n        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;\n    }\n\n    // \u6dfb\u52a0\u503c\n    public V put(K key, V value) {\n        // \u8ba1\u7b97key\u7684hash\u503c\n        return putVal(hash(key), key, value, false, true);\n    }\n\n    final V putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict) {\n        Node<K,V>[] tab;\n        Node<K,V> p; // hash \u6307\u5411\u7684\u8282\u70b9\n        int n, i; // n \u662f\u5bb9\u5668\u6570\u7ec4\u957f\u5ea6\n        // \u5982\u679ctable\u4e3a\u7a7a\u6216\u8005\u957f\u5ea6\u4e3a0 \u5219\u6269\u5bb9\n        if ((tab = table) == null || (n = tab.length) == 0)\n            n = (tab = resize()).length;\n\n        // tab \u5f53\u524d\u4f4d\u7f6e\u4e3a\u7a7a\uff0c\u76f4\u63a5\u63d2\u5165\uff08\u591a\u7ebf\u7a0b\u4e0b\u5bb9\u6613\u6570\u636e\u88ab\u8986\u76d6\uff09\n        if ((p = tab[i = (n - 1) & hash]) == null)\n            tab[i] = newNode(hash, key, value, null);\n        else {\n            // hash \u51b2\u7a81\n            Node<K,V> e; K k;\n            // key \u76f8\u540c\n            if (p.hash == hash && ((k = p.key) == key || (key != null && key.equals(k))))\n                e = p;\n            // key \u4e0d\u540c\u4e14\u662f\u4f7f\u7528\u7ea2\u9ed1\u6811\u5904\u7406\u51b2\u7a81\n            else if (p instanceof TreeNode)\n                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);\n            else {\n                // \u4f7f\u7528\u94fe\u8868\u5904\u7406\u51b2\u7a81\n                // \u904d\u5386\u94fe\u8868\n                for (int binCount = 0; ; ++binCount) {\n                    // \u94fe\u8868\u7684\u5c3e\u7aef\u4e5f\u6ca1\u6709\u627e\u5230key\u503c\u76f8\u540c\u7684\u8282\u70b9\uff0c\u5219\u751f\u6210\u4e00\u4e2a\u65b0\u7684Node\n                    if ((e = p.next) == null) {\n                        p.next = newNode(hash, key, value, null);\n\n                        // \u662f\u5426\u6811\u5316\n                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st\n                            treeifyBin(tab, hash);\n                        break;\n                    }\n\n                    // \u627e\u5230\u76f8\u540c\u7684 key\n                    if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))\n                        break;\n                    p = e;\n                }\n            }\n\n            if (e != null) { // existing mapping for key\n                // \u66ff\u6362\u65e7\u7684\u503c\n                V oldValue = e.value;\n                if (!onlyIfAbsent || oldValue == null)\n                    e.value = value;\n                afterNodeAccess(e);\n                return oldValue;\n            }\n        }\n        // \u4fee\u6539\u6b21\u6570\n        ++modCount;\n        // \u5b9e\u9645\u5bb9\u91cf\u5927\u4e8e\u4e34\u754c\u503c \u6269\u5bb9\n        if (++size > threshold)\n            resize();\n        afterNodeInsertion(evict);\n        return null;\n    }\n\n    // \u6269\u5bb9\u5e76\u590d\u5236\u6570\u636e\n    final Node<K,V>[] resize() {\n        Node<K,V>[] oldTab = table;\n        int oldCap = (oldTab == null) ? 0 : oldTab.length;\n        int oldThr = threshold;\n        int newCap, newThr = 0;\n        // \u5bb9\u5668\u5b9e\u9645\u5bb9\u91cf\u5927\u4e8e0\n        if (oldCap > 0) {\n             // \u5224\u65ad\u5f53\u524dNode\u7684\u957f\u5ea6\uff0c\u5982\u679c\u5f53\u524d\u957f\u5ea6\u8d85\u8fc7 MAXIMUM_CAPACITY\uff08\u6700\u5927\u5bb9\u91cf\u503c\uff09\n            if (oldCap >= MAXIMUM_CAPACITY) {\n                // \u65b0\u589e\u9600\u503c\u4e3a Integer.MAX_VALUE\n                threshold = Integer.MAX_VALUE;\n                return oldTab;\n            }\n            // \u5982\u679c\u5c0f\u4e8e\u8fd9\u4e2a MAXIMUM_CAPACITY\uff08\u6700\u5927\u5bb9\u91cf\u503c\uff09\uff0c\u5e76\u4e14\u5927\u4e8e DEFAULT_INITIAL_CAPACITY \uff08\u9ed8\u8ba416\uff09\n            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY && oldCap >= DEFAULT_INITIAL_CAPACITY)\n                // 2\u500d\u6269\u5bb9\n                newThr = oldThr << 1; // double threshold\n        }\n        else if (oldThr > 0) // initial capacity was placed in threshold\n            // \u6307\u5b9a\u65b0\u589e\u9600\u503c\n            newCap = oldThr;\n        else {               // zero initial threshold signifies using defaults\n        // \u5982\u679c\u6570\u7ec4\u4e3a\u7a7a\n            //\u4f7f\u7528\u9ed8\u8ba4\u7684\u52a0\u8f7d\u56e0\u5b50(0.75)\n            newCap = DEFAULT_INITIAL_CAPACITY;\n             // \u65b0\u589e\u7684\u9600\u503c\u4e5f\u5c31\u4e3a 16 * 0.75 = 12\n            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);\n        }\n        if (newThr == 0) {\n            // \u6309\u7167\u7ed9\u5b9a\u7684\u521d\u59cb\u5927\u5c0f\u8ba1\u7b97\u6269\u5bb9\u540e\u7684\u65b0\u589e\u9600\u503c\n            float ft = (float)newCap * loadFactor;\n            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?\n                      (int)ft : Integer.MAX_VALUE);\n        }\n        // \u6269\u5bb9\u540e\u7684\u65b0\u589e\u9600\u503c\n        threshold = newThr;\n\n        // \u6269\u5bb9\u540e\u7684Node\u6570\u7ec4\n        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];\n        table = newTab;\n         // \u5982\u679c\u6570\u7ec4\u4e0d\u4e3a\u7a7a\uff0c\u5c06\u539f\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u653e\u5165\u6269\u5bb9\u540e\u7684\u6570\u7ec4\u4e2d\n        if (oldTab != null) {\n            for (int j = 0; j < oldCap; ++j) {\n                Node<K,V> e;\n                if ((e = oldTab[j]) != null) {\n                    oldTab[j] = null;\n                    // \u5982\u679c\u8282\u70b9\u4e3a\u7a7a\uff0c\u5219\u76f4\u63a5\u8ba1\u7b97\u5728\u65b0\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\uff0c\u653e\u5165\u5373\u53ef\n                    if (e.next == null)\n                        newTab[e.hash & (newCap - 1)] = e;\n                    else if (e instanceof TreeNode)\n                        // \u62c6\u5206\u6811\u8282\u70b9\n                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);\n                    else { // preserve order\n                        // \u5982\u679c\u8282\u70b9\u4e0d\u4e3a\u7a7a\uff0c\u4e14\u4e3a\u5355\u94fe\u8868\uff0c\u5219\u5c06\u539f\u6570\u7ec4\u4e2d\u5355\u94fe\u8868\u5143\u7d20\u8fdb\u884c\u62c6\u5206\n                        Node<K,V> loHead = null, loTail = null; // \u4fdd\u5b58\u5728\u539f\u6709\u7d22\u5f15\u7684\u94fe\u8868\n                        Node<K,V> hiHead = null, hiTail = null; // \u4fdd\u5b58\u5728\u65b0\u7d22\u5f15\u7684\u94fe\u8868\n                        Node<K,V> next;\n                        do {\n                            next = e.next;\n                            // \u54c8\u5e0c\u503c\u548c\u539f\u6570\u7ec4\u957f\u5ea6\u8fdb\u884c&\u64cd\u4f5c\uff0c\u4e3a0\u5219\u5728\u539f\u6570\u7ec4\u7684\u7d22\u5f15\u4f4d\u7f6e\n                            // \u975e0\u5219\u5728\u539f\u6570\u7ec4\u7d22\u5f15\u4f4d\u7f6e+\u539f\u6570\u7ec4\u957f\u5ea6\u7684\u65b0\u4f4d\u7f6e\n                            if ((e.hash & oldCap) == 0) {\n                                if (loTail == null)\n                                    loHead = e;\n                                else\n                                    loTail.next = e;\n                                loTail = e;\n                            }\n                            else {\n                                if (hiTail == null)\n                                    hiHead = e;\n                                else\n                                    hiTail.next = e;\n                                hiTail = e;\n                            }\n                        } while ((e = next) != null);\n                        if (loTail != null) {\n                            loTail.next = null;\n                            newTab[j] = loHead;\n                        }\n                        if (hiTail != null) {\n                            hiTail.next = null;\n                            newTab[j + oldCap] = hiHead;\n                        }\n                    }\n                }\n            }\n        }\n        return newTab;\n    }\n\n    // \u521b\u5efa\u65b0\u7684\u8282\u70b9\n    Node<K,V> newNode(int hash, K key, V value, Node<K,V> next) {\n        return new Node<>(hash, key, value, next);\n    }\n\n    // hash\u51fd\u6570\n    // (1) \u53d6key\u7684hashCode\u503c\uff0ch = key.hashCode()\uff1b \n    // (2) \u9ad8\u4f4d\u53c2\u4e0e\u8fd0\u7b97\uff0ch ^ (h >>> 16)\uff1b \n    // (3) \u53d6\u6a21\u8fd0\u7b97\uff0ch & (length-1)\u3002\n    static final int hash(Object key) {\n        int h;\n        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);\n    }\n\n    // \u7ea2\u9ed1\u6811\u7ed3\u6784\u5b9e\u73b0 \u7b80\u7565\u90e8\u5206\u4ee3\u7801\n    static final class TreeNode<K,V> extends LinkedHashMap.Entry<K,V> {\n        TreeNode<K,V> parent;  // red-black tree links\n        TreeNode<K,V> left;\n        TreeNode<K,V> right;\n        TreeNode<K,V> prev;    // needed to unlink next upon deletion\n        boolean red;\n        TreeNode(int hash, K key, V val, Node<K,V> next) {\n            super(hash, key, val, next);\n        }\n\n        // \u628a\u653e\u5165\u7ea2\u9ed1\u6811\u4e2d\n        final TreeNode<K,V> putTreeVal(HashMap<K,V> map, Node<K,V>[] tab,\n                                       int h, K k, V v) {\n            Class<?> kc = null;\n            boolean searched = false;\n            TreeNode<K,V> root = (parent != null) ? root() : this;\n            for (TreeNode<K,V> p = root;;) {\n                int dir, ph; K pk;\n                if ((ph = p.hash) > h)\n                    dir = -1;\n                else if (ph < h)\n                    dir = 1;\n                else if ((pk = p.key) == k || (k != null && k.equals(pk)))\n                    return p;\n                else if ((kc == null &&\n                          (kc = comparableClassFor(k)) == null) ||\n                         (dir = compareComparables(kc, k, pk)) == 0) {\n                    if (!searched) {\n                        TreeNode<K,V> q, ch;\n                        searched = true;\n                        if (((ch = p.left) != null &&\n                             (q = ch.find(h, k, kc)) != null) ||\n                            ((ch = p.right) != null &&\n                             (q = ch.find(h, k, kc)) != null))\n                            return q;\n                    }\n                    dir = tieBreakOrder(k, pk);\n                }\n\n                TreeNode<K,V> xp = p;\n                if ((p = (dir <= 0) ? p.left : p.right) == null) {\n                    Node<K,V> xpn = xp.next;\n                    TreeNode<K,V> x = map.newTreeNode(h, k, v, xpn);\n                    if (dir <= 0)\n                        xp.left = x;\n                    else\n                        xp.right = x;\n                    xp.next = x;\n                    x.parent = x.prev = xp;\n                    if (xpn != null)\n                        ((TreeNode<K,V>)xpn).prev = x;\n                    moveRootToFront(tab, balanceInsertion(root, x));\n                    return null;\n                }\n            }\n        }\n\n        final TreeNode<K,V> getTreeNode(int h, Object k) {\n            return ((parent != null) ? root() : this).find(h, k, null);\n        }\n\n        // \u67e5\u627e\u7ea2\u9ed1\u6811\n        final TreeNode<K,V> find(int h, Object k, Class<?> kc) {\n            TreeNode<K,V> p = this;\n            do {\n                int ph, dir; K pk;\n                TreeNode<K,V> pl = p.left, pr = p.right, q;\n                if ((ph = p.hash) > h)\n                    p = pl;\n                else if (ph < h)\n                    p = pr;\n                else if ((pk = p.key) == k || (k != null && k.equals(pk)))\n                    return p;\n                else if (pl == null)\n                    p = pr;\n                else if (pr == null)\n                    p = pl;\n                else if ((kc != null ||\n                          (kc = comparableClassFor(k)) != null) &&\n                         (dir = compareComparables(kc, k, pk)) != 0)\n                    p = (dir < 0) ? pl : pr;\n                else if ((q = pr.find(h, k, kc)) != null)\n                    return q;\n                else\n                    p = pl;\n            } while (p != null);\n            return null;\n        }\n    }\n\n    // \u83b7\u53d6\u503c\n    public V get(Object key) {\n        Node<K,V> e;\n        return (e = getNode(hash(key), key)) == null ? null : e.value;\n    }\n\n    final Node<K,V> getNode(int hash, Object key) {\n        Node<K,V>[] tab; \n        Node<K,V> first, e; \n        int n; \n        K k;\n\n        // table\u4e0d\u4e3a\u7a7a\u4e14\u957f\u5ea6\u5927\u4e8e0\u4e14\u503c\u5b58\u5728\n        if ((tab = table) != null && (n = tab.length) > 0 && (first = tab[(n - 1) & hash]) != null) {\n            // \u5148\u68c0\u67e5\u5934\u7ed3\u70b9\n            if (first.hash == hash &&  ((k = first.key) == key || (key != null && key.equals(k))))\n                return first;\n            // \u904d\u5386\n            if ((e = first.next) != null) {\n                // \u904d\u5386\u7ea2\u9ed1\u6570\n                if (first instanceof TreeNode)\n                    return ((TreeNode<K,V>)first).getTreeNode(hash, key);\n                do {\n                    // \u904d\u5386\u94fe\u8868\n                    if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))\n                        return e;\n                } while ((e = e.next) != null);\n            }\n        }\n        return null;\n    }\n\n    // \u6570\u5316\n    final void treeifyBin(Node<K,V>[] tab, int hash) {\n        int n, index; \n        Node<K,V> e;\n        \n        // \u5bb9\u5668\u5c0f\u4e8e MIN_TREEIFY_CAPACITY \u6269\u5bb9\n        if (tab == null || (n = tab.length) < MIN_TREEIFY_CAPACITY)\n            resize();\n        else if ((e = tab[index = (n - 1) & hash]) != null) {\n            // \u6811\u5316\u64cd\u4f5c\n            TreeNode<K,V> hd = null, tl = null;\n            do {\n                TreeNode<K,V> p = replacementTreeNode(e, null);\n                if (tl == null)\n                    hd = p;\n                else {\n                    p.prev = tl;\n                    tl.next = p;\n                }\n                tl = p;\n            } while ((e = e.next) != null);\n            if ((tab[index] = hd) != null)\n                hd.treeify(tab);\n        }\n    }\n\n}\n')),(0,i.kt)("h3",{id:"hash"},"hash"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tab[i = (n - 1) & hash]")," \u7528\u6765\u5b9a\u4f4d\u6876\u4f4d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(n - 1) & hash")," \u4f4d\u8fd0\u7b97\u5f97\u5230\u7684\u503c\u5c0f\u4e8e (n-1)"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f1ahash\u51b2\u7a81"},"\u4e3a\u4ec0\u4e48\u4f1ahash\u51b2\u7a81"),(0,i.kt)("p",null,"\u5c31\u662f\u6839\u636ekey\u5373\u7ecf\u8fc7\u4e00\u4e2a\u51fd\u6570f(key)\u5f97\u5230\u7684\u7ed3\u679c\u7684\u4f5c\u4e3a\u5730\u5740\u53bb\u5b58\u653e\u5f53\u524d\u7684key\uff0cvalue\u952e\u503c\u5bf9(\u8fd9\u4e2a\u662fhashmap\u7684\u5b58\u503c\u65b9\u5f0f)\uff0c\u4f46\u662f\u5374\u53d1\u73b0\u7b97\u51fa\u6765\u7684\u5730\u5740\u4e0a\u5df2\u7ecf\u6709\u6570\u636e\u3002"),(0,i.kt)("p",null,"hash\u51b2\u7a81\u7684\u51e0\u79cd\u60c5\u51b5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u8282\u70b9\u7684key\u503c\u76f8\u540c\uff08hash\u503c\u4e00\u5b9a\u76f8\u540c\uff09\uff0c\u5bfc\u81f4\u51b2\u7a81 "),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u8282\u70b9\u7684key\u503c\u4e0d\u540c\uff0c\u7531\u4e8ehash\u51fd\u6570\u7684\u5c40\u9650\u6027\u5bfc\u81f4hash\u503c\u76f8\u540c\uff0c\u5bfc\u81f4\u51b2\u7a81 "),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u8282\u70b9\u7684key\u503c\u4e0d\u540c\uff0chash\u503c\u4e0d\u540c\uff0c\u4f46hash\u503c\u5bf9\u6570\u7ec4\u957f\u5ea6\u53d6\u6a21\u540e\u76f8\u540c\uff0c\u5bfc\u81f4\u51b2\u7a81 ")),(0,i.kt)("h4",{id:"\u89e3\u51b3hash\u51b2\u7a81"},"\u89e3\u51b3hash\u51b2\u7a81"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f00\u653e\u5bfb\u5740\u6cd5--\u7ebf\u6027\u63a2\u6d4b")),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2aKey\u901a\u8fc7hash\u51fd\u6570\u83b7\u5f97\u5bf9\u5e94\u7684\u6570\u7ec4\u4e0b\u6807\u5df2\u88ab\u5360\u7528\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u5bfb\u627e\u4e0b\u4e00\u4e2a\u7a7a\u6863\u4f4d\u7f6e"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u94fe\u8868\u6cd5")),(0,i.kt)("h3",{id:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u8868\u73b0"},"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u8868\u73b0"),(0,i.kt)("p",null,"\u5728JDK1.8\u4e2d\uff0c\u5728\u5e76\u53d1\u6267\u884cput\u64cd\u4f5c\u65f6\u4f1a\u53d1\u751f\u6570\u636e\u8986\u76d6\u7684\u60c5\u51b5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"if ((p = tab[i = (n - 1) & hash]) == null)\n        tab[i] = newNode(hash, key, value, null);\n")),(0,i.kt)("p",null,"\u53d1\u751f\u573a\u666f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u4e24\u4e2a\u7ebf\u7a0bA\u3001B\u90fd\u5728\u8fdb\u884cput\u64cd\u4f5c\uff0c\u5e76\u4e14hash\u51fd\u6570\u8ba1\u7b97\u51fa\u7684\u63d2\u5165\u4e0b\u6807\u662f\u76f8\u540c\u7684"),(0,i.kt)("li",{parentName:"ol"},"\u5f53\u7ebf\u7a0bA\u6267\u884c\u5b8c\u4e0a\u9762\u4ee3\u7801\u540e\u7531\u4e8e\u65f6\u95f4\u7247\u8017\u5c3d\u5bfc\u81f4\u88ab\u6302\u8d77\uff0c\u800c\u7ebf\u7a0bB\u5f97\u5230\u65f6\u95f4\u7247\u540e\u5728\u8be5\u4e0b\u6807\u5904\u63d2\u5165\u4e86\u5143\u7d20\uff0c\u5b8c\u6210\u4e86\u6b63\u5e38\u7684\u63d2\u5165"),(0,i.kt)("li",{parentName:"ol"},"\u7136\u540e\u7ebf\u7a0bA\u83b7\u5f97\u65f6\u95f4\u7247\uff0c\u7531\u4e8e\u4e4b\u524d\u5df2\u7ecf\u8fdb\u884c\u4e86hash\u78b0\u649e\u7684\u5224\u65ad\uff0c\u6240\u6709\u6b64\u65f6\u4e0d\u4f1a\u518d\u8fdb\u884c\u5224\u65ad\uff0c\u800c\u662f\u76f4\u63a5\u8fdb\u884c\u63d2\u5165\uff0c")),(0,i.kt)("p",null,"\u8fd9\u5c31\u5bfc\u81f4\u4e86\u7ebf\u7a0bB\u63d2\u5165\u7684\u6570\u636e\u88ab\u7ebf\u7a0bA\u8986\u76d6\u4e86\uff0c\u4ece\u800c\u7ebf\u7a0b\u4e0d\u5b89\u5168"),(0,i.kt)("h2",{id:"linkedhashmapclass"},"LinkedHashMap.class"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LinkedHashMap\u662f\u7ee7\u627f\u4e8eHashMap\uff0c\u662f\u57fa\u4e8eHashMap\u548c\u53cc\u5411\u94fe\u8868\u6765\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"HashMap\u65e0\u5e8f\uff1bLinkedHashMap\u6709\u5e8f\uff0c\u53ef\u5206\u4e3a\u63d2\u5165\u987a\u5e8f\uff08\u5148\u8fdb\u5148\u51fa\uff09\u548c\u8bbf\u95ee\u987a\u5e8f\uff08\u6700\u8fd1\u6700\u5c11\uff09\u4e24\u79cd\u3002",(0,i.kt)("br",{parentName:"li"}),"\u5982\u679c\u662f\u8bbf\u95ee\u987a\u5e8f\uff0c\u90a3put\u548cget\u64cd\u4f5c\u5df2\u5b58\u5728\u7684Entry\u65f6\uff0c\u90fd\u4f1a\u628aEntry\u79fb\u52a8\u5230\u53cc\u5411\u94fe\u8868\u7684\u8868\u5c3e(\u5176\u5b9e\u662f\u5148\u5220\u9664\u518d\u63d2\u5165)\u3002"),(0,i.kt)("li",{parentName:"ul"},"LinkedHashMap\u5b58\u53d6\u6570\u636e\uff0c\u8fd8\u662f\u8ddfHashMap\u4e00\u6837\u4f7f\u7528\u7684Entry[]\u7684\u65b9\u5f0f\uff0c\u53cc\u5411\u94fe\u8868\u53ea\u662f\u4e3a\u4e86\u4fdd\u8bc1\u987a\u5e8f\u3002"),(0,i.kt)("li",{parentName:"ul"},"LinkedHashMap\u662f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u7684\u3002")),(0,i.kt)("h3",{id:"\u67b6\u6784\u56fe-1"},"\u67b6\u6784\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(15849).Z})),(0,i.kt)("h3",{id:"\u6e90\u7801-1"},"\u6e90\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class LinkedHashMap<K,V>\n    extends HashMap<K,V>\n    implements Map<K,V>\n{\n    transient LinkedHashMap.Entry<K,V> head;\n    transient LinkedHashMap.Entry<K,V> tail;\n    // \u8868\u793a\u8fed\u4ee3\u987a\u5e8f\uff0ctrue\u8868\u793a\u8bbf\u95ee\u987a\u5e8f\uff0cfalse\u8868\u793a\u63d2\u5165\u987a\u5e8f\n    final boolean accessOrder;\n}\n")),(0,i.kt)("h4",{id:"put-\u65b9\u6cd5"},"put \u65b9\u6cd5"),(0,i.kt)("p",null,"LinkedHashMap \u6ca1\u6709\u91cd\u5199put\u65b9\u6cd5\uff0c\u6240\u4ee5\u8fd8\u662f\u8c03\u7528HashMap\u5f97\u5230put\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n// HashMap.class\npublic V put(K key, V value) {\n    return putVal(hash(key), key, value, false, true);\n}\n\nfinal V putVal(int hash, K key, V value, boolean onlyIfAbsent,\n                boolean evict) {\n    ...\n    afterNodeInsertion(evict);\n    return null;\n}\n\nvoid afterNodeInsertion(boolean evict) { }\n\n\n// LinkedHashMap.class\nvoid afterNodeInsertion(boolean evict) { // possibly remove eldest\n    LinkedHashMap.Entry<K,V> first;\n    if (evict && (first = head) != null && removeEldestEntry(first)) {\n        K key = first.key;\n        removeNode(hash(key), key, null, false, true);\n    }\n}\n\nprotected boolean removeEldestEntry(Map.Entry<K,V> eldest) {\n    return false;\n}\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u5185\u5bb9"},"\u53c2\u8003\u5185\u5bb9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/myseries/p/10876828.html"},"Java8 HashMap\u8be6\u89e3")))}h.isMDXComponent=!0},86805:function(n,e,a){"use strict";e.Z=a.p+"assets/images/88585920190516171536728-de5661ab6859c167cd98df548395b71a.png"},15849:function(n,e,a){"use strict";e.Z=a.p+"assets/images/LinkedHashMap-8ea2d47f5cfbbe121ff1c963cc4f163b.png"},1711:function(n,e,a){"use strict";e.Z=a.p+"assets/images/hashmap-b2c22311915bd05b96fa02db891a68f4.png"}}]);