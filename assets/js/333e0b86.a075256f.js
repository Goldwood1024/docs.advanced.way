(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2386],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return o},kt:function(){return g}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},o=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,o=c(n,["components","mdxType","originalType","parentName"]),d=s(t),g=a,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return t?r.createElement(f,l(l({ref:e},o),{},{components:t})):r.createElement(f,l({ref:e},o))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5228:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),l=["components"],c={title:"String"},u={unversionedId:"java/base/String",id:"java/base/String",isDocsHomePage:!1,title:"String",description:"\u5b9a\u4e49",source:"@site/docs/java/base/String.md",sourceDirName:"java/base",slug:"/java/base/String",permalink:"/docs.advanced.way/docs/java/base/String",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/java/base/String.md",version:"current",lastUpdatedAt:1625551523,formattedLastUpdatedAt:"7/6/2021",frontMatter:{title:"String"},sidebar:"java",previous:{title:"\u5173\u952e\u5b57",permalink:"/docs.advanced.way/docs/java/base/\u5173\u952e\u5b57"},next:{title:"I/O",permalink:"/docs.advanced.way/docs/java/base/io"}},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u5e38\u91cf\u6c60",id:"\u5e38\u91cf\u6c60",children:[{value:"\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60",id:"\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60",children:[]},{value:"Class\u5e38\u91cf\u6c60",id:"class\u5e38\u91cf\u6c60",children:[]},{value:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60",id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60",children:[]},{value:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3001Class\u5e38\u91cf\u6c60\u3001\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u7684\u533a\u522b\u4e0e\u8054\u7cfb",id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3001class\u5e38\u91cf\u6c60\u3001\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u7684\u533a\u522b\u4e0e\u8054\u7cfb",children:[]}]},{value:"StringBuilder\u3001StringBuffer",id:"stringbuilder\u3001stringbuffer",children:[{value:"StringBuilder.class",id:"stringbuilderclass",children:[]},{value:"StringBuffer.class",id:"stringbufferclass",children:[]},{value:"AbstractStringBuilder.class",id:"abstractstringbuilderclass",children:[]},{value:"\u533a\u522b",id:"\u533a\u522b",children:[]}]}],o={toc:s};function p(n){var e=n.components,c=(0,a.Z)(n,l);return(0,i.kt)("wrapper",(0,r.Z)({},o,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"String \u88ab\u58f0\u660e\u4e3a final\uff0c\u56e0\u6b64\u5b83\u4e0d\u53ef\u88ab\u7ee7\u627f\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5728 Java 8 \u4e2d\uff0cString \u5185\u90e8\u4f7f\u7528 char \u6570\u7ec4\u5b58\u50a8\u6570\u636e",(0,i.kt)("br",{parentName:"p"}),"\n","\u5728 Java 9 \u4e4b\u540e\uff0cString \u7c7b\u7684\u5b9e\u73b0\u6539\u7528 byte \u6570\u7ec4\u5b58\u50a8\u5b57\u7b26\u4e32\uff0c\u540c\u65f6\u4f7f\u7528 coder \u6765\u6807\u8bc6\u4f7f\u7528\u4e86\u54ea\u79cd\u7f16\u7801")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public final class String\n    implements java.io.Serializable, Comparable<String>, CharSequence{\n\n    @Stable\n    private final byte[] value;\n\n    public String(byte bytes[], int offset, int length) {\n        checkBoundsOffCount(offset, length, bytes.length);\n        StringCoding.Result ret = StringCoding.decode(bytes, offset, length);\n        this.value = ret.value;\n        this.coder = ret.coder;\n    }\n\n    // \u624b\u52a8\u5c06\u5b57\u7b26\u4e32\u653e\u5165\u5e38\u91cf\u6c60\n    public native String intern();\n}\n")),(0,i.kt)("p",null,"String\u5bf9\u8c61\u5728\u5185\u5b58(\u5806)\u4e2d\u88ab\u521b\u5efa\u51fa\u6765\uff0c\u4ed6\u5c31\u65e0\u6cd5\u88ab\u4fee\u6539\u3002String\u7c7b\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u6ca1\u6709\u6539\u53d8\u5b57\u7b26\u4e32\u672c\u8eab\u7684\u503c\uff0c\u90fd\u662f\u8fd4\u56de\u4e86\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61"),(0,i.kt)("h2",{id:"\u5e38\u91cf\u6c60"},"\u5e38\u91cf\u6c60"),(0,i.kt)("h3",{id:"\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60"},"\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728JVM\u4e2d\uff0c\u4e3a\u4e86\u51cf\u5c11\u76f8\u540c\u7684\u5b57\u7b26\u4e32\u7684\u91cd\u590d\u521b\u5efa\uff0c\u4e3a\u4e86\u8fbe\u5230\u8282\u7701\u5185\u5b58\u7684\u76ee\u7684, \u4f1a\u5355\u72ec\u5f00\u8f9f\u4e00\u5757\u5185\u5b58\uff0c\u7528\u4e8e\u4fdd\u5b58\u5b57\u7b26\u4e32\u5e38\u91cf\uff0c\u8fd9\u4e2a\u5185\u5b58\u533a\u57df\u88ab\u53eb\u505a\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60")),(0,i.kt)("p",null,"\u957f\u5ea6\u9650\u5236\n\u7f16\u8bd1\u5668 65534\uff0c\u8fd0\u884c\u671f 2^31-1 \u7ea6\u7b49\u4e8e4G"),(0,i.kt)("h3",{id:"class\u5e38\u91cf\u6c60"},"Class\u5e38\u91cf\u6c60"),(0,i.kt)("p",null,"Class \u6587\u4ef6\u5305\u542b\u5e38\u91cf\u6c60\u7ed3\u6784 ",(0,i.kt)("inlineCode",{parentName:"p"},"Constant pool"),"\uff0c\u5f53\u865a\u62df\u673a\u8fd0\u884c\u65f6\uff0c\u9700\u8981\u4ece\u5e38\u91cf\u6c60\u83b7\u5f97\u5bf9\u5e94\u7684\u7b26\u53f7\u5f15\u7528\uff0c\u518d\u5728\u7c7b\u521b\u5efa\u65f6\u6216\u8fd0\u884c\u65f6\u89e3\u6790\u3001\u7ffb\u8bd1\u5230\u5177\u4f53\u7684\u5185\u5b58\u5730\u5740\u4e4b\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class StringDemo {\n    public static void main(String[] args) {\n        String s1 = "\u5e38\u91cf\u5b57\u7b26\u4e321";\n        String s2 = "\u5e38\u91cf\u5b57\u7b26\u4e322";\n    }\n}\n\n// \u7f16\u8bd1\u6587\u4ef6\njavac StringDemo\n\n// \u67e5\u770bclass\njavap -v StringDemo.class\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3871).Z})),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"},"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff08 Runtime Constant Pool\uff09\u662f\u6bcf\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7684\u5e38\u91cf\u6c60\uff08 Constant_Pool\uff09\u7684\u8fd0\u884c\u65f6\u8868\u793a\u5f62\u5f0f"),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u90fd\u5728Java\u865a\u62df\u673a\u7684\u65b9\u6cd5\u533a\u4e2d\u5206\u914d\uff0c\u5728\u52a0\u8f7d\u7c7b\u548c\u63a5\u53e3\u5230\u865a\u62df\u673a\u540e\uff0c\u5c31\u521b\u5efa\u5bf9\u5e94\u7684\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3001class\u5e38\u91cf\u6c60\u3001\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u7684\u533a\u522b\u4e0e\u8054\u7cfb"},"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3001Class\u5e38\u91cf\u6c60\u3001\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u7684\u533a\u522b\u4e0e\u8054\u7cfb"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u548c\u9759\u6001\u5e38\u91cf\u6c60\u5b58\u653e\u5728\u5143\u7a7a\u95f4\u4e2d\uff0c\u800c\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u4f9d\u7136\u5b58\u653e\u5728\u5806\u4e2d")),(0,i.kt)("p",null,"\u865a\u62df\u673a\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5c06\u5404\u4e2aClass\u6587\u4ef6\u4e2d\u7684\u5e38\u91cf\u6c60\u8f7d\u5165\u5230\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0cClass\u5e38\u91cf\u6c60\u53ea\u662f\u4e00\u4e2a\u5a92\u4ecb\u573a\u6240\u3002\u5728JVM\u771f\u7684\u8fd0\u884c\u65f6\uff0c\u9700\u8981\u628a\u5e38\u91cf\u6c60\u4e2d\u7684\u5e38\u91cf\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u8fdb\u5165\u5230\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3002"),(0,i.kt)("p",null,"\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u53ef\u4ee5\u7406\u89e3\u4e3a\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u5206\u51fa\u6765\u7684\u90e8\u5206\u3002\u52a0\u8f7d\u65f6\uff0c\u5bf9\u4e8eclass\u7684\u9759\u6001\u5e38\u91cf\u6c60\uff0c\u5982\u679c\u5b57\u7b26\u4e32\u4f1a\u88ab\u88c5\u5230\u5b57\u7b26\u4e32\u5e38\u91cf\u6c60\u4e2d\u3002"),(0,i.kt)("h2",{id:"stringbuilder\u3001stringbuffer"},"StringBuilder\u3001StringBuffer"),(0,i.kt)("h3",{id:"stringbuilderclass"},"StringBuilder.class"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(52083).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public final class StringBuilder\n    extends AbstractStringBuilder\n    implements java.io.Serializable, Comparable<StringBuilder>, CharSequence\n{\n\n    @HotSpotIntrinsicCandidate\n    public StringBuilder() {\n        super(16);\n    }\n}\n")),(0,i.kt)("h3",{id:"stringbufferclass"},"StringBuffer.class"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(59188).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public final class StringBuffer\n    extends AbstractStringBuilder\n    implements java.io.Serializable, Comparable<StringBuffer>, CharSequence\n{\n\n    // toString() \u8fd4\u56de toStringCache\uff0c\u6bcf\u6b21\u4fee\u6539\u65f6\u6e05\u7a7a\n    private transient String toStringCache;\n\n    @HotSpotIntrinsicCandidate\n    public StringBuffer() {\n        super(16);\n    }\n\n    @Override\n    public synchronized StringBuffer append(Object obj) {\n        toStringCache = null;\n        super.append(String.valueOf(obj));\n        return this;\n    }\n}\n")),(0,i.kt)("h3",{id:"abstractstringbuilderclass"},"AbstractStringBuilder.class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"abstract class AbstractStringBuilder implements Appendable, CharSequence {\n    // \u5b58\u50a8\n    byte[] value;\n    // \u7f16\u7801\n    byte coder;\n    // \u5b9e\u9645\u5b57\u7b26\u6570\n    int count;\n\n    // \u7a7a\u503c\n    private static final byte[] EMPTYVALUE = new byte[0];\n    // \u6700\u5927\u5bb9\u91cf\n    private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;\n\n    // \u6784\u9020\u51fd\u6570\n    AbstractStringBuilder(int capacity) {\n        if (COMPACT_STRINGS) {\n            // \u521d\u59cb\u5316\u5927\u5c0f \u9ed8\u8ba416\n            value = new byte[capacity];\n            coder = LATIN1;\n        } else {\n            value = StringUTF16.newBytesFor(capacity);\n            coder = UTF16;\n        }\n    }\n\n    public AbstractStringBuilder append(String str) {\n        if (str == null) {\n            // \u8bbe\u4e3a null\n            return appendNull();\n        }\n\n        int len = str.length();\n        // \u6269\u5bb9 \u5386\u53f2\u5927\u5c0f+\u8ffd\u52a0\u5b57\u7b26\u4e32\u5927\u5c0f\n        ensureCapacityInternal(count + len);\n\n        // \u591a\u7ebf\u7a0b\u4e0b\u4e0d\u5b89\u5168\n        putStringAt(count, str);\n        count += len;\n        return this;\n    }\n\n    // \u5f53\u524d\u5bb9\u91cf\n    public int capacity() {\n        return value.length >> coder;\n    }\n\n    private void ensureCapacityInternal(int minimumCapacity) {\n        // \u5224\u65ad\u662f\u5426\u9700\u8981\u6269\u5bb9\n        int oldCapacity = value.length >> coder;\n        if (minimumCapacity - oldCapacity > 0) {\n            // \u6269\u5bb9\u540e\u590d\u5236old\u6570\u636e\n            value = Arrays.copyOf(value, newCapacity(minimumCapacity) << coder);\n        }\n    }\n\n    private int newCapacity(int minCapacity) {\n        int oldCapacity = value.length >> coder;\n        // \u957f\u5ea6 2\u500d+2\n        int newCapacity = (oldCapacity << 1) + 2;\n        if (newCapacity - minCapacity < 0) {\n            // \u6269\u5145\u540e\u7684\u957f\u5ea6\u4e0d\u591f\uff0c\u76f4\u63a5\u6269\u5145\u5230\u6240\u9700\u7684\u5bb9\u91cf\u5927\u5c0f\n            newCapacity = minCapacity;\n        }\n\n        int SAFE_BOUND = MAX_ARRAY_SIZE >> coder;\n        return (newCapacity <= 0 || SAFE_BOUND - newCapacity < 0)\n            ? hugeCapacity(minCapacity)\n            : newCapacity;\n    }\n\n    private int hugeCapacity(int minCapacity) {\n        int SAFE_BOUND = MAX_ARRAY_SIZE >> coder;\n        int UNSAFE_BOUND = Integer.MAX_VALUE >> coder;\n        if (UNSAFE_BOUND - minCapacity < 0) { // overflow\n            throw new OutOfMemoryError();\n        }\n        return (minCapacity > SAFE_BOUND)\n            ? minCapacity : SAFE_BOUND;\n    }\n\n    // \u8bbe\u7f6e\u6570\u7ec4\u5927\u5c0f\n    public void setLength(int newLength) {\n        if (newLength < 0) {\n            throw new StringIndexOutOfBoundsException(newLength);\n        }\n        ensureCapacityInternal(newLength);\n        if (count < newLength) {\n            if (isLatin1()) {\n                StringLatin1.fillNull(value, count, newLength);\n            } else {\n                StringUTF16.fillNull(value, count, newLength);\n            }\n        }\n        count = newLength;\n    }\n}\n")),(0,i.kt)("h3",{id:"\u533a\u522b"},"\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u90fd\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractStringBuilder"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuffer")," \u90fd\u662f\u53ef\u53d8\u5b57\u7b26\u4e32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6027\u80fd\u6bd4\u8f83"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StringBuilder")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"StringBuffer")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"String")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"StringBuffer \u7ebf\u7a0b\u5b89\u5168,\u5185\u90e8\u4f7f\u7528 synchronized \u8fdb\u884c\u540c\u6b65")))}p.isMDXComponent=!0},3871:function(n,e,t){"use strict";e.Z=t.p+"assets/images/15401195127619-77c97e4ee591fcfde05dd51eb3aa0bad.png"},59188:function(n,e,t){"use strict";e.Z=t.p+"assets/images/stringbuffer-63d1421e548dd64c040087118a65dd7b.png"},52083:function(n,e,t){"use strict";e.Z=t.p+"assets/images/stringbuilder-30f25a926253a61f463116b19af33174.png"}}]);