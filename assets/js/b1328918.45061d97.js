(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{442:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(505)),o={title:"\u5e76\u53d1\u5de5\u5177\u7c7b"},c={unversionedId:"java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b",id:"java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b",isDocsHomePage:!1,title:"\u5e76\u53d1\u5de5\u5177\u7c7b",description:"CountDownLatch",source:"@site/docs/java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b.md",slug:"/java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b",permalink:"/docs.advanced.way/docs/java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/java/hc/\u5e76\u53d1\u5de5\u5177\u7c7b.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"java",previous:{title:"\u5e76\u53d1\u5bb9\u5668",permalink:"/docs.advanced.way/docs/java/hc/\u5e76\u53d1\u5bb9\u5668"},next:{title:"\u7ebf\u7a0b\u6c60",permalink:"/docs.advanced.way/docs/java/hc/\u7ebf\u7a0b\u6c60"}},l=[{value:"CountDownLatch",id:"countdownlatch",children:[{value:"\u6e90\u7801",id:"\u6e90\u7801",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[]}]},{value:"CyclicBarrier",id:"cyclicbarrier",children:[{value:"\u6e90\u7801",id:"\u6e90\u7801-1",children:[]},{value:"CyclicBarrier \u548c CountDownLatch \u533a\u522b",id:"cyclicbarrier-\u548c-countdownlatch-\u533a\u522b",children:[]}]},{value:"Semaphore",id:"semaphore",children:[{value:"\u6e90\u7801",id:"\u6e90\u7801-2",children:[]}]},{value:"Exchanger",id:"exchanger",children:[{value:"\u6e90\u7801",id:"\u6e90\u7801-3",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],s={toc:l};function u(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"countdownlatch"},"CountDownLatch"),Object(a.b)("p",null,"\u5141\u8bb8\u4e00\u4e2a\u6216\u591a\u4e2a\u7ebf\u7a0b\u7b49\u5f85\u5176\u4ed6\u7ebf\u7a0b\u5b8c\u6210\u64cd\u4f5c"),Object(a.b)("h3",{id:"\u6e90\u7801"},"\u6e90\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public class CountDownLatch {\n    \n    // Synchronization control For CountDownLatch. Uses AQS state to represent count.\n    private static final class Sync extends AbstractQueuedSynchronizer {\n        private static final long serialVersionUID = 4982264981922014374L;\n\n        Sync(int count) {\n            setState(count);\n        }\n\n        int getCount() {\n            return getState();\n        }\n\n        protected int tryAcquireShared(int acquires) {\n            return (getState() == 0) ? 1 : -1;\n        }\n\n        protected boolean tryReleaseShared(int releases) {\n            // Decrement count; signal when transition to zero\n            for (;;) {\n                int c = getState();\n                if (c == 0)\n                    return false;\n                int nextc = c - 1;\n                if (compareAndSetState(c, nextc))\n                    return nextc == 0;\n            }\n        }\n    }\n\n    private final Sync sync;\n\n    public CountDownLatch(int count) {\n        if (count < 0) throw new IllegalArgumentException("count < 0");\n\n        // \u521b\u5efa\u8ba1\u6570\u5668\n        this.sync = new Sync(count);\n    }\n\n    public void await() throws InterruptedException {\n        sync.acquireSharedInterruptibly(1);\n    }\n\n    public boolean await(long timeout, TimeUnit unit)\n        throws InterruptedException {\n        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));\n    }\n\n    public void countDown() {\n        sync.releaseShared(1);\n    }\n\n    public long getCount() {\n        return sync.getCount();\n    }\n\n    public String toString() {\n        return super.toString() + "[Count = " + sync.getCount() + "]";\n    }\n}\n')),Object(a.b)("h3",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"class Driver {\n    void main() throws InterruptedException {\n        // \u521b\u5efa\u8ba1\u6570\u5668\n        CountDownLatch startSignal = new CountDownLatch(1);\n        CountDownLatch doneSignal = new CountDownLatch(N);\n \n        for (int i = 0; i < N; ++i) // create and start threads\n            new Thread(new Worker(startSignal, doneSignal)).start();\n \n        doSomethingElse();            // don't let run yet\n        startSignal.countDown();      // let all threads proceed\n        doSomethingElse();\n\n        // \u963b\u585e\u5f53\u524d\u7ebf\u7a0b\n        doneSignal.await();           // wait for all to finish\n    }\n}\n \nclass Worker implements Runnable {\n    private final CountDownLatch startSignal;\n    private final CountDownLatch doneSignal;\n    Worker(CountDownLatch startSignal, CountDownLatch doneSignal) {\n        this.startSignal = startSignal;\n        this.doneSignal = doneSignal;\n    }\n    public void run() {\n        try {\n            startSignal.await();\n            doWork();\n\n            // \u51cf\u4e00\n            doneSignal.countDown();\n        } catch (InterruptedException ex) {} // return;\n    }\n \n    void doWork() { ... }\n    }\n}\n")),Object(a.b)("h2",{id:"cyclicbarrier"},"CyclicBarrier"),Object(a.b)("p",null,"\u8ba9\u4e00\u7ec4\u7ebf\u7a0b\u5230\u8fbe\u4e00\u4e2a\u5c4f\u969c\u65f6\u88ab\u963b\u585e\uff0c\u76f4\u5230\u6700\u540e\u4e00\u4e2a\u7ebf\u7a0b\u5230\u8fbe\u5c4f\u969c\u65f6\uff0c\u5c4f\u969c\u624d\u4f1a\u6253\u5f00\uff0c\u6240\u6709\u88ab\u62e6\u622a\u7684\u7ebf\u7a0b\u624d\u4f1a\u7ee7\u7eed\u6267\u884c"),Object(a.b)("h3",{id:"\u6e90\u7801-1"},"\u6e90\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public class CyclicBarrier {\n    // \u6bcf\u4e00\u6b21\u4f7f\u7528\u7684CycBarrier\u53ef\u4ee5\u5f53\u6210Generation\u7684\u5b9e\u4f8b\n    private static class Generation {\n        Generation() {}                 // prevent access constructor creation\n        // \u8868\u793a\u5f53\u524d\u5c4f\u969c\u662f\u5426\u88ab\u635f\u574f\n        boolean broken;                 // initially false\n    }\n\n    // \u540c\u6b65\u64cd\u4f5c\u9501\n    private final ReentrantLock lock = new ReentrantLock();\n    // \u6761\u4ef6\n    private final Condition trip = lock.newCondition();\n    // \u53c2\u4e0e\u7684\u7ebf\u7a0b\u6570\u91cf\n    private final int parties;\n    // \u7531\u6700\u540e\u4e00\u4e2a\u8fdb\u5165 barrier \u7684\u7ebf\u7a0b\u6267\u884c\u7684\u64cd\u4f5c\n    private final Runnable barrierCommand;\n    // \u5f53\u524d\u4ee3\n    private Generation generation = new Generation();\n    // \u6b63\u5728\u7b49\u5f85\u8fdb\u5165\u5c4f\u969c\u7684\u7ebf\u7a0b\u6570\u91cf\n    private int count;\n\n    private void nextGeneration() {\n        // \u5524\u9192\u6240\u6709\u7ebf\u7a0b\n        trip.signalAll();\n        // \u6062\u590d\u6b63\u5728\u7b49\u5f85\u8fdb\u5165\u5c4f\u969c\u7684\u7ebf\u7a0b\u6570\u91cf\n        count = parties;\n        // \u65b0\u751f\u4e00\u4ee3\n        generation = new Generation();\n    }\n\n    private void breakBarrier() {\n        // \u635f\u574f\u5f53\u524d\u5c4f\u969c\n        generation.broken = true;\n        count = parties;\n        // \u5524\u9192\u6240\u6709\u7684\u7ebf\u7a0b\n        trip.signalAll();\n    }\n\n    private int dowait(boolean timed, long nanos)\n        throws InterruptedException, BrokenBarrierException,\n               TimeoutException {\n        // \u4fdd\u5b58\u5f53\u524d\u9501\n        final ReentrantLock lock = this.lock;\n        // \u52a0\u9501\n        lock.lock();\n        try {\n            // \u4fdd\u5b58\u5f53\u524d\u4ee3\n            final Generation g = generation;\n\n            // \u5c4f\u969c\u88ab\u7834\u574f\uff0c\u629b\u51fa\u5f02\u5e38\n            if (g.broken)\n                throw new BrokenBarrierException();\n\n            // \u7ebf\u7a0b\u88ab\u4e2d\u65ad\n            if (Thread.interrupted()) {\n                // \u635f\u574f\u5f53\u524d\u5c4f\u969c\uff0c\u5e76\u4e14\u5524\u9192\u6240\u6709\u7684\u7ebf\u7a0b\uff0c\u53ea\u6709\u62e5\u6709\u9501\u7684\u65f6\u5019\u624d\u4f1a\u8c03\u7528\n                breakBarrier();\n                throw new InterruptedException();\n            }\n\n            // \u51cf\u5c11\u6b63\u5728\u7b49\u5f85\u8fdb\u5165\u5c4f\u969c\u7684\u7ebf\u7a0b\u6570\u91cf\n            int index = --count;\n            // \u6b63\u5728\u7b49\u5f85\u8fdb\u5165\u5c4f\u969c\u7684\u7ebf\u7a0b\u6570\u91cf\u4e3a0\uff0c\u6240\u6709\u7ebf\u7a0b\u90fd\u5df2\u7ecf\u8fdb\u5165\n            if (index == 0) {  // tripped\n                // \u8fd0\u884c\u7684\u52a8\u4f5c\u6807\u8bc6\n                boolean ranAction = false;\n                try {\n                    final Runnable command = barrierCommand;\n                    if (command != null)\n                        command.run();\n                    ranAction = true;\n\n                    // \u8fdb\u5165\u4e0b\u4e00\u4ee3\n                    nextGeneration();\n                    return 0;\n                } finally {\n                    if (!ranAction)\n                        breakBarrier();\n                }\n            }\n\n            // loop until tripped, broken, interrupted, or timed out\n            for (;;) {\n                try {\n                    // \u6ca1\u6709\u8bbe\u7f6e\u7b49\u5f85\u65f6\u95f4\n                    if (!timed)\n                        // \u7ebf\u7a0b\u7b49\u5f85\n                        trip.await();\n                    else if (nanos > 0L) // \u8bbe\u7f6e\u4e86\u7b49\u5f85\u65f6\u95f4\uff0c\u5e76\u4e14\u7b49\u5f85\u65f6\u95f4\u5927\u4e8e0\n                        nanos = trip.awaitNanos(nanos);\n                } catch (InterruptedException ie) {\n                    // \u7b49\u4e8e\u5f53\u524d\u4ee3\u5e76\u4e14\u5c4f\u969c\u6ca1\u6709\u88ab\u635f\u574f\n                    if (g == generation && ! g.broken) {\n                        // \u635f\u574f\u5f53\u524d\u5c4f\u969c\n                        breakBarrier();\n                        throw ie;\n                    } else {\n                        // We\'re about to finish waiting even if we had not\n                        // been interrupted, so this interrupt is deemed to\n                        // "belong" to subsequent execution.\n                        Thread.currentThread().interrupt();\n                    }\n                }\n\n                if (g.broken)\n                    throw new BrokenBarrierException();\n\n                // \u4e0d\u7b49\u4e8e\u5f53\u524d\u4ee3\n                if (g != generation)\n                    return index;\n\n                // \u8bbe\u7f6e\u4e86\u7b49\u5f85\u65f6\u95f4\uff0c\u5e76\u4e14\u7b49\u5f85\u65f6\u95f4\u5c0f\u4e8e0\n                if (timed && nanos <= 0L) {\n                    breakBarrier();\n                    throw new TimeoutException();\n                }\n            }\n        } finally {\n            // \u91ca\u653e\u9501\n            lock.unlock();\n        }\n    }\n\n    public CyclicBarrier(int parties, Runnable barrierAction) {\n        if (parties <= 0) throw new IllegalArgumentException();\n        this.parties = parties;\n        this.count = parties;\n        this.barrierCommand = barrierAction;\n    }\n\n    public CyclicBarrier(int parties) {\n        this(parties, null);\n    }\n\n    public int getParties() {\n        return parties;\n    }\n\n    public int await() throws InterruptedException, BrokenBarrierException {\n        try {\n            return dowait(false, 0L);\n        } catch (TimeoutException toe) {\n            throw new Error(toe); // cannot happen\n        }\n    }\n\n    public int await(long timeout, TimeUnit unit)\n        throws InterruptedException,\n               BrokenBarrierException,\n               TimeoutException {\n        return dowait(true, unit.toNanos(timeout));\n    }\n\n    public boolean isBroken() {\n        final ReentrantLock lock = this.lock;\n        lock.lock();\n        try {\n            return generation.broken;\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    // \u91cd\u7f6e\n    public void reset() {\n        final ReentrantLock lock = this.lock;\n        lock.lock();\n        try {\n            breakBarrier();   // break the current generation\n            nextGeneration(); // start a new generation\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public int getNumberWaiting() {\n        final ReentrantLock lock = this.lock;\n        lock.lock();\n        try {\n            return parties - count;\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"cyclicbarrier-\u548c-countdownlatch-\u533a\u522b"},"CyclicBarrier \u548c CountDownLatch \u533a\u522b"),Object(a.b)("p",null,"CountDownLatch \u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\uff0cCyclicBarrier\u53ef\u4ee5\u4f7f\u7528reset()\u65b9\u6cd5\u91cd\u7f6e"),Object(a.b)("h2",{id:"semaphore"},"Semaphore"),Object(a.b)("p",null,"\u7528\u6765\u63a7\u5236\u540c\u65f6\u8bbf\u95ee\u7279\u70b9\u8d44\u6e90\u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u901a\u8fc7\u534f\u8c03\u5404\u4e2a\u7ebf\u7a0b\u4ee5\u4fdd\u8bc1\u5408\u7406\u7684\u4f7f\u7528\u516c\u5171\u8d44\u6e90"),Object(a.b)("h3",{id:"\u6e90\u7801-2"},"\u6e90\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public class Semaphore implements java.io.Serializable {\n    private static final long serialVersionUID = -3222578661600680210L;\n    private final Sync sync;\n\n    abstract static class Sync extends AbstractQueuedSynchronizer {\n        private static final long serialVersionUID = 1192457210091910933L;\n\n        Sync(int permits) {\n            setState(permits);\n        }\n\n        final int getPermits() {\n            return getState();\n        }\n\n        final int nonfairTryAcquireShared(int acquires) {\n            for (;;) {\n                int available = getState();\n                int remaining = available - acquires;\n                if (remaining < 0 ||\n                    compareAndSetState(available, remaining))\n                    return remaining;\n            }\n        }\n\n        protected final boolean tryReleaseShared(int releases) {\n            for (;;) {\n                int current = getState();\n                int next = current + releases;\n                if (next < current) // overflow\n                    throw new Error("Maximum permit count exceeded");\n                if (compareAndSetState(current, next))\n                    return true;\n            }\n        }\n\n        final void reducePermits(int reductions) {\n            for (;;) {\n                int current = getState();\n                int next = current - reductions;\n                if (next > current) // underflow\n                    throw new Error("Permit count underflow");\n                if (compareAndSetState(current, next))\n                    return;\n            }\n        }\n\n        final int drainPermits() {\n            for (;;) {\n                int current = getState();\n                if (current == 0 || compareAndSetState(current, 0))\n                    return current;\n            }\n        }\n    }\n\n    /**\n     * NonFair version\n     */\n    static final class NonfairSync extends Sync {\n        private static final long serialVersionUID = -2694183684443567898L;\n\n        NonfairSync(int permits) {\n            super(permits);\n        }\n\n        protected int tryAcquireShared(int acquires) {\n            return nonfairTryAcquireShared(acquires);\n        }\n    }\n\n    /**\n     * Fair version\n     */\n    static final class FairSync extends Sync {\n        private static final long serialVersionUID = 2014338818796000944L;\n\n        FairSync(int permits) {\n            super(permits);\n        }\n\n        protected int tryAcquireShared(int acquires) {\n            for (;;) {\n                if (hasQueuedPredecessors())\n                    return -1;\n                int available = getState();\n                int remaining = available - acquires;\n                if (remaining < 0 ||\n                    compareAndSetState(available, remaining))\n                    return remaining;\n            }\n        }\n    }\n\n    public Semaphore(int permits) {\n        sync = new NonfairSync(permits);\n    }\n\n    public Semaphore(int permits, boolean fair) {\n        sync = fair ? new FairSync(permits) : new NonfairSync(permits);\n    }\n\n    public void acquire() throws InterruptedException {\n        sync.acquireSharedInterruptibly(1);\n    }\n\n    public void acquireUninterruptibly() {\n        sync.acquireShared(1);\n    }\n\n    public boolean tryAcquire() {\n        return sync.nonfairTryAcquireShared(1) >= 0;\n    }\n\n    public boolean tryAcquire(long timeout, TimeUnit unit)\n        throws InterruptedException {\n        return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));\n    }\n\n    public void release() {\n        sync.releaseShared(1);\n    }\n\n    public void acquire(int permits) throws InterruptedException {\n        if (permits < 0) throw new IllegalArgumentException();\n        sync.acquireSharedInterruptibly(permits);\n    }\n\n    public void acquireUninterruptibly(int permits) {\n        if (permits < 0) throw new IllegalArgumentException();\n        sync.acquireShared(permits);\n    }\n\n    public boolean tryAcquire(int permits) {\n        if (permits < 0) throw new IllegalArgumentException();\n        return sync.nonfairTryAcquireShared(permits) >= 0;\n    }\n\n    public boolean tryAcquire(int permits, long timeout, TimeUnit unit)\n        throws InterruptedException {\n        if (permits < 0) throw new IllegalArgumentException();\n        return sync.tryAcquireSharedNanos(permits, unit.toNanos(timeout));\n    }\n\n    public void release(int permits) {\n        if (permits < 0) throw new IllegalArgumentException();\n        sync.releaseShared(permits);\n    }\n\n    public int availablePermits() {\n        return sync.getPermits();\n    }\n\n    public int drainPermits() {\n        return sync.drainPermits();\n    }\n\n    protected void reducePermits(int reduction) {\n        if (reduction < 0) throw new IllegalArgumentException();\n        sync.reducePermits(reduction);\n    }\n\n    public boolean isFair() {\n        return sync instanceof FairSync;\n    }\n\n    public final boolean hasQueuedThreads() {\n        return sync.hasQueuedThreads();\n    }\n\n    public final int getQueueLength() {\n        return sync.getQueueLength();\n    }\n\n    protected Collection<Thread> getQueuedThreads() {\n        return sync.getQueuedThreads();\n    }\n\n    public String toString() {\n        return super.toString() + "[Permits = " + sync.getPermits() + "]";\n    }\n}\n')),Object(a.b)("h2",{id:"exchanger"},"Exchanger"),Object(a.b)("p",null,"\u7528\u4e8e\u4e24\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u7684\u5de5\u5177\u7c7b, \u901a\u8fc7exchange\u65b9\u6cd5\u4ea4\u6362\u6570\u636e"),Object(a.b)("h3",{id:"\u6e90\u7801-3"},"\u6e90\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'public class Exchanger<V> {\n    private static final int ASHIFT = 5;\n\n    private static final int MMASK = 0xff;\n\n    /**\n     * Unit for sequence/version bits of bound field. Each successful\n     * change to the bound also adds SEQ.\n     */\n    private static final int SEQ = MMASK + 1;\n\n    /** The number of CPUs, for sizing and spin control */\n    private static final int NCPU = Runtime.getRuntime().availableProcessors();\n\n    static final int FULL = (NCPU >= (MMASK << 1)) ? MMASK : NCPU >>> 1;\n\n    private static final int SPINS = 1 << 10;\n\n    private static final Object NULL_ITEM = new Object();\n\n    private static final Object TIMED_OUT = new Object();\n\n    @jdk.internal.vm.annotation.Contended static final class Node {\n        int index;              // Arena index\n        int bound;              // Last recorded value of Exchanger.bound\n        int collides;           // Number of CAS failures at current bound\n        int hash;               // Pseudo-random for spins\n        Object item;            // This thread\'s current item\n        volatile Object match;  // Item provided by releasing thread\n        volatile Thread parked; // Set to this thread when parked, else null\n    }\n\n    /** The corresponding thread local class */\n    static final class Participant extends ThreadLocal<Node> {\n        public Node initialValue() { return new Node(); }\n    }\n\n    /**\n     * Per-thread state.\n     */\n    private final Participant participant;\n\n    private volatile Node[] arena;\n\n    private volatile Node slot;\n\n    private volatile int bound;\n\n    private final Object arenaExchange(Object item, boolean timed, long ns) {\n        Node[] a = arena;\n        int alen = a.length;\n        Node p = participant.get();\n        for (int i = p.index;;) {                      // access slot at i\n            int b, m, c;\n            int j = (i << ASHIFT) + ((1 << ASHIFT) - 1);\n            if (j < 0 || j >= alen)\n                j = alen - 1;\n            Node q = (Node)AA.getAcquire(a, j);\n            if (q != null && AA.compareAndSet(a, j, q, null)) {\n                Object v = q.item;                     // release\n                q.match = item;\n                Thread w = q.parked;\n                if (w != null)\n                    LockSupport.unpark(w);\n                return v;\n            }\n            else if (i <= (m = (b = bound) & MMASK) && q == null) {\n                p.item = item;                         // offer\n                if (AA.compareAndSet(a, j, null, p)) {\n                    long end = (timed && m == 0) ? System.nanoTime() + ns : 0L;\n                    Thread t = Thread.currentThread(); // wait\n                    for (int h = p.hash, spins = SPINS;;) {\n                        Object v = p.match;\n                        if (v != null) {\n                            MATCH.setRelease(p, null);\n                            p.item = null;             // clear for next use\n                            p.hash = h;\n                            return v;\n                        }\n                        else if (spins > 0) {\n                            h ^= h << 1; h ^= h >>> 3; h ^= h << 10; // xorshift\n                            if (h == 0)                // initialize hash\n                                h = SPINS | (int)t.getId();\n                            else if (h < 0 &&          // approx 50% true\n                                     (--spins & ((SPINS >>> 1) - 1)) == 0)\n                                Thread.yield();        // two yields per wait\n                        }\n                        else if (AA.getAcquire(a, j) != p)\n                            spins = SPINS;       // releaser hasn\'t set match yet\n                        else if (!t.isInterrupted() && m == 0 &&\n                                 (!timed ||\n                                  (ns = end - System.nanoTime()) > 0L)) {\n                            p.parked = t;              // minimize window\n                            if (AA.getAcquire(a, j) == p) {\n                                if (ns == 0L)\n                                    LockSupport.park(this);\n                                else\n                                    LockSupport.parkNanos(this, ns);\n                            }\n                            p.parked = null;\n                        }\n                        else if (AA.getAcquire(a, j) == p &&\n                                 AA.compareAndSet(a, j, p, null)) {\n                            if (m != 0)                // try to shrink\n                                BOUND.compareAndSet(this, b, b + SEQ - 1);\n                            p.item = null;\n                            p.hash = h;\n                            i = p.index >>>= 1;        // descend\n                            if (Thread.interrupted())\n                                return null;\n                            if (timed && m == 0 && ns <= 0L)\n                                return TIMED_OUT;\n                            break;                     // expired; restart\n                        }\n                    }\n                }\n                else\n                    p.item = null;                     // clear offer\n            }\n            else {\n                if (p.bound != b) {                    // stale; reset\n                    p.bound = b;\n                    p.collides = 0;\n                    i = (i != m || m == 0) ? m : m - 1;\n                }\n                else if ((c = p.collides) < m || m == FULL ||\n                         !BOUND.compareAndSet(this, b, b + SEQ + 1)) {\n                    p.collides = c + 1;\n                    i = (i == 0) ? m : i - 1;          // cyclically traverse\n                }\n                else\n                    i = m + 1;                         // grow\n                p.index = i;\n            }\n        }\n    }\n\n    private final Object slotExchange(Object item, boolean timed, long ns) {\n        Node p = participant.get();\n        Thread t = Thread.currentThread();\n        if (t.isInterrupted()) // preserve interrupt status so caller can recheck\n            return null;\n\n        for (Node q;;) {\n            if ((q = slot) != null) {\n                if (SLOT.compareAndSet(this, q, null)) {\n                    Object v = q.item;\n                    q.match = item;\n                    Thread w = q.parked;\n                    if (w != null)\n                        LockSupport.unpark(w);\n                    return v;\n                }\n                // create arena on contention, but continue until slot null\n                if (NCPU > 1 && bound == 0 &&\n                    BOUND.compareAndSet(this, 0, SEQ))\n                    arena = new Node[(FULL + 2) << ASHIFT];\n            }\n            else if (arena != null)\n                return null; // caller must reroute to arenaExchange\n            else {\n                p.item = item;\n                if (SLOT.compareAndSet(this, null, p))\n                    break;\n                p.item = null;\n            }\n        }\n\n        // await release\n        int h = p.hash;\n        long end = timed ? System.nanoTime() + ns : 0L;\n        int spins = (NCPU > 1) ? SPINS : 1;\n        Object v;\n        while ((v = p.match) == null) {\n            if (spins > 0) {\n                h ^= h << 1; h ^= h >>> 3; h ^= h << 10;\n                if (h == 0)\n                    h = SPINS | (int)t.getId();\n                else if (h < 0 && (--spins & ((SPINS >>> 1) - 1)) == 0)\n                    Thread.yield();\n            }\n            else if (slot != p)\n                spins = SPINS;\n            else if (!t.isInterrupted() && arena == null &&\n                     (!timed || (ns = end - System.nanoTime()) > 0L)) {\n                p.parked = t;\n                if (slot == p) {\n                    if (ns == 0L)\n                        LockSupport.park(this);\n                    else\n                        LockSupport.parkNanos(this, ns);\n                }\n                p.parked = null;\n            }\n            else if (SLOT.compareAndSet(this, p, null)) {\n                v = timed && ns <= 0L && !t.isInterrupted() ? TIMED_OUT : null;\n                break;\n            }\n        }\n        MATCH.setRelease(p, null);\n        p.item = null;\n        p.hash = h;\n        return v;\n    }\n\n    /**\n     * Creates a new Exchanger.\n     */\n    public Exchanger() {\n        participant = new Participant();\n    }\n\n    @SuppressWarnings("unchecked")\n    public V exchange(V x) throws InterruptedException {\n        Object v;\n        Node[] a;\n        Object item = (x == null) ? NULL_ITEM : x; // translate null args\n        if (((a = arena) != null ||\n             (v = slotExchange(item, false, 0L)) == null) &&\n            ((Thread.interrupted() || // disambiguates null return\n              (v = arenaExchange(item, false, 0L)) == null)))\n            throw new InterruptedException();\n        return (v == NULL_ITEM) ? null : (V)v;\n    }\n\n    @SuppressWarnings("unchecked")\n    public V exchange(V x, long timeout, TimeUnit unit)\n        throws InterruptedException, TimeoutException {\n        Object v;\n        Object item = (x == null) ? NULL_ITEM : x;\n        long ns = unit.toNanos(timeout);\n        if ((arena != null ||\n             (v = slotExchange(item, true, ns)) == null) &&\n            ((Thread.interrupted() ||\n              (v = arenaExchange(item, true, ns)) == null)))\n            throw new InterruptedException();\n        if (v == TIMED_OUT)\n            throw new TimeoutException();\n        return (v == NULL_ITEM) ? null : (V)v;\n    }\n\n    // VarHandle mechanics\n    private static final VarHandle BOUND;\n    private static final VarHandle SLOT;\n    private static final VarHandle MATCH;\n    private static final VarHandle AA;\n    static {\n        try {\n            MethodHandles.Lookup l = MethodHandles.lookup();\n            BOUND = l.findVarHandle(Exchanger.class, "bound", int.class);\n            SLOT = l.findVarHandle(Exchanger.class, "slot", Node.class);\n            MATCH = l.findVarHandle(Node.class, "match", Object.class);\n            AA = MethodHandles.arrayElementVarHandle(Node[].class);\n        } catch (ReflectiveOperationException e) {\n            throw new ExceptionInInitializerError(e);\n        }\n    }\n\n}\n')),Object(a.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.cnblogs.com/leesf456/p/5392816.html"},"\u3010JUC\u3011JDK1.8\u6e90\u7801\u5206\u6790\u4e4bCyclicBarrier\uff08\u56db\uff09")))}u.isMDXComponent=!0},505:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=i.a.createContext({}),u=function(n){var e=i.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return i.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},h=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,o=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||a;return t?i.a.createElement(m,c(c({ref:e},s),{},{components:t})):i.a.createElement(m,c({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);