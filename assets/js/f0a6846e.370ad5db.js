(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8509],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=["components"],i={title:"Collection"},c={unversionedId:"java/collection/Collection",id:"java/collection/Collection",isDocsHomePage:!1,title:"Collection",description:"Collection\u662f\u6700\u57fa\u672c\u7684\u96c6\u5408\u63a5\u53e3\uff0c\u4e00\u4e2aCollection\u4ee3\u8868\u4e00\u7ec4Object\uff0c\u5373Collection\u7684\u5143\u7d20\uff08Elements\uff09",source:"@site/docs/java/collection/Collection.md",sourceDirName:"java/collection",slug:"/java/collection/Collection",permalink:"/docs.advanced.way/docs/java/collection/Collection",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/java/collection/Collection.md",version:"current",lastUpdatedAt:1622709462,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"Collection"},sidebar:"java",previous:{title:"JDK",permalink:"/docs.advanced.way/docs/java/base/jdk"},next:{title:"List",permalink:"/docs.advanced.way/docs/java/collection/List"}},s=[{value:"Collection\u63a5\u53e3\u7c7b",id:"collection\u63a5\u53e3\u7c7b",children:[]},{value:"Iterator \u63a5\u53e3",id:"iterator-\u63a5\u53e3",children:[]},{value:"ListIterator",id:"listiterator",children:[]}],u={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38762).Z})),(0,a.kt)("p",null,"Collection\u662f\u6700\u57fa\u672c\u7684\u96c6\u5408\u63a5\u53e3\uff0c\u4e00\u4e2aCollection\u4ee3\u8868\u4e00\u7ec4Object\uff0c\u5373Collection\u7684\u5143\u7d20\uff08Elements\uff09"),(0,a.kt)("p",null,"Collection\u4e0b\u9762\u53c8\u5206\u4e86\u4e09\u4e2a\u5b50\u63a5\u53e3\uff0c\u5206\u522b\u662fSet,List\u548cQueue"),(0,a.kt)("h2",{id:"collection\u63a5\u53e3\u7c7b"},"Collection\u63a5\u53e3\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Collection<E> extends Iterable<E> {\n    int size();\n    boolean isEmpty();\n    boolean contains(Object o);\n    Iterator<E> iterator();\n    Object[] toArray();\n    <T> T[] toArray(T[] a);\n    default <T> T[] toArray(IntFunction<T[]> generator) {\n        return toArray(generator.apply(0));\n    }\n    boolean add(E e);\n    boolean remove(Object o);\n    boolean containsAll(Collection<?> c);\n    boolean addAll(Collection<? extends E> c);\n    boolean removeAll(Collection<?> c);\n    default boolean removeIf(Predicate<? super E> filter) {\n        Objects.requireNonNull(filter);\n        boolean removed = false;\n        final Iterator<E> each = iterator();\n        while (each.hasNext()) {\n            if (filter.test(each.next())) {\n                each.remove();\n                removed = true;\n            }\n        }\n        return removed;\n    }\n    boolean retainAll(Collection<?> c);\n    void clear();\n    boolean equals(Object o);\n    int hashCode();\n    @Override\n    default Spliterator<E> spliterator() {\n        return Spliterators.spliterator(this, 0);\n    }\n    default Stream<E> stream() {\n        return StreamSupport.stream(spliterator(), false);\n    }\n\n    default Stream<E> parallelStream() {\n        return StreamSupport.stream(spliterator(), true);\n    }\n}\n")),(0,a.kt)("h2",{id:"iterator-\u63a5\u53e3"},"Iterator \u63a5\u53e3"),(0,a.kt)("p",null,"\u7528\u4e8e\u904d\u5386\u96c6\u5408\u4e2d\u5143\u7d20\u7684,\u53ea\u80fd\u5411\u540e\u904d\u5386\uff0c\u65e0\u6cd5\u4fee\u6539\u4fee\u6539"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public interface Iterator<E> {\n    boolean hasNext();\n    E next();\n\n    default void remove() {\n        throw new UnsupportedOperationException("remove");\n    }\n\n    // \u4e3a\u6bcf\u4e2a\u5269\u4f59\u5143\u7d20\u6267\u884c\u7ed9\u5b9a\u7684\u64cd\u4f5c,\u76f4\u5230\u6240\u6709\u7684\u5143\u7d20\u90fd\u5df2\u7ecf\u88ab\u5904\u7406\u6216\u884c\u52a8\u5c06\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\n    default void forEachRemaining(Consumer<? super E> action) {\n        Objects.requireNonNull(action);\n        while (hasNext())\n            action.accept(next());\n    }\n}\n\n// \u4f7f\u7528\nIterator it = collection.iterator();\nwhile(it.hasNext()) {\n    Object obj = it.next(); // \u5f97\u5230\u4e0b\u4e00\u4e2a\u5143\u7d20\n}\n')),(0,a.kt)("h2",{id:"listiterator"},"ListIterator"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u5411\u524d\u3001\u5411\u540e\u4e24\u4e2a\u65b9\u5411\u904d\u5386 List"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u904d\u5386\u65f6\u4fee\u6539 List \u7684\u5143\u7d20"),(0,a.kt)("li",{parentName:"ol"},"\u904d\u5386\u65f6\u83b7\u53d6\u8fed\u4ee3\u5668\u5f53\u524d\u6e38\u6807\u6240\u5728\u4f4d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface ListIterator<E> extends Iterator<E> {\n    boolean hasNext();\n    E next();\n\n    boolean hasPrevious();\n    E previous();\n\n    int nextIndex();\n    int previousIndex();\n\n    void remove();\n    void set(E e);\n    void add(E e);\n}\n")))}p.isMDXComponent=!0},38762:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1090571.jpg-a37788c444748d1826851f572f63096e.gif"}}]);