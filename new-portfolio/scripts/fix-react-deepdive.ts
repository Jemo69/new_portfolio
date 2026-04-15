import { createClient } from '@libsql/client';

const client = createClient({ 
  url: 'libsql://new-portfolio-jemo69.aws-us-west-2.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTkzNjQ0MTcsImlkIjoiYmE0Y2U1ZjktNjViNC00YTdiLWI1YjctNzMwMGM3Y2UyODc5IiwicmlkIjoiZTZiZDY4MTgtYWJkMC00NDc3LTg1NDgtMDBmOGQ0ZjViMzM1In0.5N2r4FRlrwbCTYoHRTxiiO7nGeavfrMMd4KzACTYjQn7UYKsYdcPOFKXOpWoZy6WyysPQE2AcwXObKc00m1xDQ'
});

const newContent = `<br>
<h1>Modern React Explained: From Beginner to Expert</h1>
<p>React has dominated the web, and I think that is fair to say. It powers a huge number of sites on the internet, and it is used by big players like Facebook, Microsoft, Airbnb, Walmart, and millions of other companies and startups. But most people only use <code>useState</code> and <code>useEffect</code>, and they do not really understand the more complex parts of React. Like, who really knows what <code>useMemo</code> and <code>useCallback</code> are? If you do not know, this is a good place to start.</p>
<h2>What is React</h2>
<p>React is a JavaScript library primarily used for building frontend interfaces. It is often used with a single-page application rendering pattern, but it can also do other things, like power server-rendered apps and even mobile apps with React Native.</p>
<p>So now we know what React is, but what is a single-page app? A single-page app, or SPA for short, is an app that loads one main HTML page and then uses JavaScript to change what is on the page. For example, Twitch is one of the biggest SPAs, and it uses React.</p>
<p>Now you may be asking, "I have used Twitch before, and it has other pages. There is the home page, the login page, and others." But let me explain. The one-HTML-page idea does not mean it only has one screen. It uses JavaScript to dynamically change what is on the page. So basically, if you disable JavaScript, a lot of the site will not work as expected.</p>
<p>When you get deep enough into React, you hear about the virtual DOM, but what is that? The virtual DOM is an in-memory representation React uses to figure out UI changes before updating the real DOM. Instead of manually updating the DOM directly, React figures out what changed and updates the actual DOM efficiently.</p>
<h2>What is a component</h2>
<p>Besides the virtual DOM, React is popular for having components, which are simple units of UI. For example, this is a simple button component:</p>
<pre><code class="language-javascript" data-language="javascript">export const Button = () => {
  return <button>Click me</button>;
};</code></pre>
<p>As you can see from the example above, the code for a button component is simple. This is a basic component. But if a component is just a function, how can it accept dynamic values that will be used when you use the component somewhere else? React has a name for that: props. Props are basically parameters for your component. That should be your mental model.</p>
<p>This is an example of props:</p>
<pre><code class="language-javascript" data-language="javascript">export const Button = ({ name }) => {
  return <button>{name}</button>;
};

// how it is used
<Button name="Jemo" />;</code></pre>
<p>You can also have multiple props in one component:</p>
<pre><code class="language-javascript" data-language="javascript">export const Button = ({ name, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick}>
      {name}
    </button>
  );
};

// how to use it
<Button
  name="Jemo"
  onClick={() => {
    console.log("Jemo");
  }}
  type="submit"
/>;</code></pre>
<p>But props can also be <code>children</code>:</p>
<pre><code class="language-javascript" data-language="javascript">export const Card = ({ children }) => {
  return <div>{children}</div>;
};</code></pre>
<p>This content will render when the component is used. So how do you use it?</p>
<pre><code class="language-javascript" data-language="javascript"><Card>
  <p>Jemo</p>
</Card>;</code></pre>
<p>Also, when rendering lists, you usually need a <code>key</code> prop.</p>
<p>A <code>key</code> prop helps React identify which elements in the array changed, were added, or were removed. If possible, make sure the key is a unique and stable ID.</p>
<p>Example of a <code>key</code> prop:</p>
<pre><code class="language-javascript" data-language="javascript">const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <input type="text" placeholder="Write a note..." />
        </li>
      ))}
    </ul>
  );
};</code></pre>
<p>The example above renders a user list from a database, and as you can see, the key is <code>user.id</code>. That is usually something from your database table. Try not to use the array index as a key unless the list is truly static.</p>
<p>But do note that a React component cannot return multiple sibling elements directly unless they are wrapped. For example, this is wrong:</p>
<pre><code class="language-javascript" data-language="javascript">export const WrongComponent = ({ children }) => {
  return (
    <div>{children}</div>
    <div></div>
  );
};</code></pre>
<p>That is wrong because it returns more than one top-level element. In a situation like this, you can wrap it with a <code>div</code> or <code>&lt;&gt; &lt;/&gt;</code>, which is a fragment. You can use a fragment instead of a <code>div</code> because it adds less markup, and it will not affect your CSS layout the way an extra <code>div</code> can.</p>
<h2>What is RSC</h2>
<p>But there is a special type of component that is not for the client, but for the server.</p>
<p>If you do not know what RSC is or what I am talking about, I am talking about React Server Components.</p>
<p>So what are server components? Server components are components that run on the server and are rendered on the server, not on the client. Server components are useful when you want to render static parts of your site and fetch data from a database or API while keeping sensitive information away from the client and keeping the client JavaScript bundle smaller.</p>
<p>But there are some disadvantages. Most importantly, server components cannot use client-side interactivity or browser APIs, because they do not run in the browser.</p>
<p>One thing I want to mention: if you are using a framework that supports server components, they are often the default, and you need to use the client directive for interactive components, which looks like this:</p>
<pre><code class="language-javascript" data-language="javascript">"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}</code></pre>
<h2>What are server actions</h2>
<p>Server actions are functions that run on the server but can be called from the client through frameworks that support them. But why choose this over a server component or a fetch call with an API route? There are some advantages.</p>
<p>It has RPC-like characteristics. You call the code from the client, but it runs on the server.</p>
<p>On some frameworks, the code can still work even if JavaScript is disabled.</p>
<p>Unlike API routes, server actions are not designed like public REST endpoints in the same way, which can reduce what is exposed.</p>
<p>Type safety can also be better with server actions since they are just functions in your app code.</p>
<p>Here is an example of a server action:</p>
<pre><code class="language-javascript" data-language="javascript">// actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";

export async function createTodo(formData) {
  const title = formData.get("title");
  await db.todo.create({ data: { title } });
  revalidatePath("/todos");
}</code></pre>
<p>How it is used:</p>
<pre><code class="language-javascript" data-language="javascript">// TodoForm.tsx
import { createTodo } from "./actions";

export function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
}</code></pre>
<p>So that is the basic idea behind server actions and server components.</p>
<h2>What are hooks</h2>
<p>Hooks are ways to hook into React state and other React features inside function components.</p>
<p>But what is the React lifecycle? The React lifecycle is basically the biography of an element.</p>
<p>There are 3 stages people usually talk about:</p>
<ul>
   <li>Mounted — this is when an element is created in the UI</li>
   <li>Updating — when state or props change and the component rerenders</li>
   <li>Unmounted — when an element is deleted or removed from the UI</li>
</ul>
<p>Now let us talk about some hook rules.</p>
<p>They must be top-level — you cannot call them inside a loop or a conditional.</p>
<p>They must be in a function — hooks must be used inside a React component or a custom hook.</p>
<p>Now let us talk about the hooks themselves.</p>
<h3><code>useState</code></h3>
<p>What is <code>useState</code>? This is a hook designed to create state that can be updated over time.</p>
<p>But what is state? State is data that belongs to a component at a point in time.</p>
<p>This is an example of how it is used in a component:</p>
<pre><code class="language-javascript" data-language="javascript">const [count, setCount] = useState(0);</code></pre>
<p>When you use <code>useState</code>, you create a variable and an updater function.</p>
<p>When do you use state?</p>
<p>It is mostly used when the state has to update the component. Like the popular counter example, it updates the number on the page when the button is pressed, which tells React that it needs to rerender the component.</p>
<p>This is the counter example in code:</p>
<pre><code class="language-javascript" data-language="javascript">import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase count by one
      </button>
    </div>
  );
};</code></pre>
<h3><code>useReducer</code></h3>
<p>This is similar to <code>useState</code>, but it is often used when multiple state values have to be updated together or when state logic gets more complex.</p>
<p>Here is an example of how it is created:</p>
<pre><code class="language-javascript" data-language="javascript">const [state, dispatch] = useReducer(reducer, initialState);</code></pre>
<p>How it is used:</p>
<pre><code class="language-javascript" data-language="javascript">const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
}</code></pre>
<h3><code>useContext</code></h3>
<p>Before I talk about <code>useContext</code>, what is context? Context is a way to get information to components without prop drilling.</p>
<p>But what is prop drilling? Just imagine your app as a tree. The root is <code>App.jsx</code>, and you have a button that is 5 components deep. If you want to get data from <code>App.jsx</code> all the way down there by passing props through every layer, that is prop drilling.</p>
<p>Context lets you create shared data and then use <code>useContext</code> to read that data where you need it. I will talk more about context later.</p>
<h3><code>useRef</code></h3>
<p><code>useRef</code> returns a mutable ref object whose <code>.current</code> property persists for the full lifetime of the component. It is commonly used for accessing DOM elements directly or storing values that should survive rerenders without causing a rerender.</p>
<pre><code class="language-javascript" data-language="javascript">const inputEl = useRef(null);

// Access via inputEl.current</code></pre>
<p>When to use <code>useRef</code>:</p>
<ul>
   <li>interacting with DOM elements</li>
   <li>focusing search on page load</li>
   <li>forcing a chat window to the bottom when a new message comes in</li>
   <li>storing things like timers or previous values</li>
</ul>
<p>When not to use <code>useRef</code>:</p>
<ul>
   <li>as a replacement for state when the UI needs to update</li>
   <li>for changing props</li>
   <li>for rendering data directly that should trigger rerenders</li>
</ul>
<h3><code>useEffect</code></h3>
<p>I just want to say that <code>useEffect</code> is one of the main reasons I went out of my way to write this blog post, because I want to tell you this: do not overuse effects.</p>
<p><code>useEffect</code> runs code after a component renders and commits to the screen.</p>
<p>This is an example of a <code>useEffect</code>:</p>
<pre><code class="language-javascript" data-language="javascript">useEffect(() => {
  // Setup logic
  return () => {
    /* Cleanup logic */
  };
}, [dependencies]);</code></pre>
<p>As you can see at the end of the <code>useEffect</code> call, the dependency array tells React when to rerun the effect.</p>
<h4>When do you need an effect</h4>
<ul>
   <li>for non-React systems or external systems</li>
   <li>manual DOM manipulation</li>
   <li>analytics</li>
   <li>timers</li>
   <li>subscriptions and event listeners</li>
</ul>
<h4>When you do not need an effect</h4>
<ul>
   <li>deriving data from props or state</li>
   <li>data transformation, where <code>useMemo</code> may help</li>
   <li>user event handling</li>
   <li>resetting something directly during render when possible</li>
   <li>syncing with an external store, where <code>useSyncExternalStore</code> can help</li>
</ul>
<p>And please, in the good name of React, do not do this unless you really know why:</p>
<pre><code class="language-javascript" data-language="javascript">import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) setUser(data);
      });
    return () => {
      ignore = true;
    };
  }, [userId]);

  return <div>{user?.name}</div>;
}</code></pre>
<p>This pattern can work, but it has a lot of flaws. You have to handle loading, errors, race conditions, retries, caching, and refetching yourself. That is why tools like TanStack Query are often better for client-side data fetching.</p>
<p>But there is something similar to <code>useEffect</code>. It is called <code>useLayoutEffect</code>, and it runs synchronously after DOM mutations but before the browser paints. It is useful when you need to measure layout or avoid flicker, but do not use it unless you actually need it.</p>
<h3><code>useMemo</code></h3>
<p>This caches the result of an expensive calculation between renders.</p>
<pre><code class="language-javascript" data-language="javascript">const cachedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);</code></pre>
<p>As you can see, it takes a function and a dependency array to recalculate the value when needed.</p>
<p>Just do not use <code>useMemo</code> everywhere. It is not free, and if the calculation is cheap, it can make the code harder to read for no real gain.</p>
<h3><code>useCallback</code></h3>
<p><code>useCallback</code> is used to cache a function between renders. It is usually used to help avoid unnecessary rerenders in memoized child components or to keep function references stable for dependencies.</p>
<pre><code class="language-javascript" data-language="javascript">const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
<p>Just like <code>useMemo</code>, do not use <code>useCallback</code> everywhere either. Use it when it solves a real problem, not because it looks advanced.</p>
<h4>When to use <code>useMemo</code> vs <code>useCallback</code></h4>
<p><code>useMemo</code> is for when you want to cache the final value.</p>
<p><code>useCallback</code> is for when you want to cache the function.</p>
<h3><code>useSyncExternalStore</code></h3>
<p>So basically, why do we use this and not <code>useEffect</code>? <code>useSyncExternalStore</code> is designed for subscribing to external stores in a way that works correctly with concurrent rendering. It helps React read consistent data and avoid UI tearing.</p>
<h2>What is Suspense</h2>
<p>Suspense gives your React app the ability to wait before showing part of the UI.</p>
<h3>How does it work</h3>
<p>Basically, when handling async work or lazy-loaded components, Suspense lets React show a fallback while something is still loading. That fallback can be another component until the other thing is ready.</p>
<h3>What are the benefits</h3>
<ul>
   <li>You do not have to add an <code>isLoading</code> variable everywhere for supported async UI patterns</li>
   <li>You can coordinate loading states better</li>
   <li>You can wrap multiple elements in a Suspense boundary</li>
</ul>
<p>But something that often comes with Suspense is <code>lazy</code>.</p>
<h3>What is <code>lazy</code></h3>
<p>Lazy loading is when you only load the JavaScript for a component when it is needed. Combined with Suspense, it can make the app feel better.</p>
<p>Here is an example:</p>
<pre><code class="language-javascript" data-language="javascript">import { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <HeavyComponent />
    </Suspense>
  );
}</code></pre>
<p>We first lazy-load the heavy component and then wrap it in Suspense. Then we tell Suspense what its fallback is. But the fallback can be any React component, so if you want to use a custom loader, feel free.</p>
<h3>What are error boundaries</h3>
<p>This is used when a component crashes or throws an error instead of rendering correctly.</p>
<pre><code class="language-javascript" data-language="javascript">import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onReset={() => {
    /* Reset state here */
  }}
>
  <MyComponent />
</ErrorBoundary>;</code></pre>
<p>This is not the built-in class-based way, but I am using this because I do not recommend teaching class components here, and this package is easier to show. For this method to work, you need to install <code>react-error-boundary</code>.</p>
<p>Also, note that error boundaries catch rendering errors in the component tree below them. They do not catch every async error or every event handler error.</p>
<h2>What is Context</h2>
<p>Context is a built-in API in React that allows you to pass data around your app without prop drilling. Just know that context does not manage state by itself — it distributes state.</p>
<p>So if you have data like auth info, theme preference, locale, or things like that which do not change constantly, context can be a good fit. But if the context value changes a lot, it can cause more rerenders for consumers.</p>
<p>If you have state that changes often or has more complex update patterns, you may want a state management library like Zustand or Redux. But just remember to use what works for you.</p>
<p>How to create it in 3 steps:</p>
<h3>1. Initialize the context</h3>
<p>This acts like the bucket that transfers data around the app.</p>
<pre><code class="language-javascript" data-language="javascript">import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);</code></pre>
<h3>2. Create the provider</h3>
<p>The provider is what broadcasts the state through the component tree.</p>
<pre><code class="language-javascript" data-language="javascript">import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}</code></pre>
<h3>3. Consume the context</h3>
<p>With the <code>useContext</code> hook I talked about earlier:</p>
<pre><code class="language-javascript" data-language="javascript">import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Current Mode: {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}</code></pre>
<h2>Custom Hooks</h2>
<p>Now let us talk about a superpower React developers have: the ability to write custom hooks.</p>
<p>Imagine if you had component logic that you wanted to reuse. That is what custom hooks are. They are standalone logic units that can be shared among components.</p>
<p>A rule for custom hooks is that they must start with <code>use</code>.</p>
<p>For example, here is one that lets you get auth state:</p>
<pre><code class="language-javascript" data-language="javascript">function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}</code></pre>
<p>Now you just go into your component and say:</p>
<pre><code class="language-javascript" data-language="javascript">import { useAuth } from "../useAuth";

export const UserName = () => {
  const auth = useAuth();
  if (!auth.user) {
    return <div>Loading...</div>;
  }
  return <div>{auth.user.name}</div>;
};</code></pre>
<p>And that is it. You can use this all over your app.</p>
<h2>React Compiler</h2>
<p>React Compiler, originally named React Forget, shifts some of the burden of writing manual optimizations to the build process.</p>
<p>This is not a normal hook or runtime feature, but it is worth talking about when discussing <code>useMemo</code> and <code>useCallback</code>, because normally you handle some of that manually. The compiler can optimize some cases automatically and reduce unnecessary rerenders.</p>
<h2>React Query or TanStack Query</h2>
<p>TanStack Query is a powerful asynchronous state management library that specializes in keeping server state in sync with the client UI. When data is fetched with this library, it handles caching and helps React update the UI.</p>
<p>This is one of the main libraries people recommend instead of hand-writing a lot of <code>useEffect</code>-based fetch logic.</p>
<p>Why use it instead of writing custom hooks? Because it gives you caching, retries, deduplication, invalidation, and more without you having to build all of that yourself.</p>
<h3>Core concepts</h3>
<p>TanStack Query has 3 core concepts:</p>
<ul>
   <li>Query — fetching data</li>
   <li>Mutation — changing data</li>
   <li>Query invalidation — marking data as stale so it can refetch</li>
</ul>
<h3>How to set it up</h3>
<h4>1. Create a Query Client</h4>
<pre><code class="language-javascript" data-language="javascript">import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});</code></pre>
<h4>2. Wrap your app with <code>QueryClientProvider</code></h4>
<pre><code class="language-javascript" data-language="javascript">import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourRouterOrComponents />
    </QueryClientProvider>
  );
}</code></pre>
<h4>3. Create your query or mutation</h4>
<pre><code class="language-javascript" data-language="javascript">import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export function TodoManager() {
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("/api/todos");
      if (!response.ok) throw new Error("Network error");
      return response.json();
    },
  });

  const addTodoMutation = useMutation({
    mutationFn: async (newTitle) => {
      const response = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ title: newTitle }),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Tasks</h2>
      <button
        disabled={addTodoMutation.isPending}
        onClick={() => addTodoMutation.mutate("New Task from UI")}
        className="bg-blue-500 rounded p-2 text-white"
      >
        {addTodoMutation.isPending ? "Adding..." : "Add Quick Task"}
      </button>
      <ul className="list-disc pl-5">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "line-through" : ""}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}</code></pre>
<h2>Optimistic UI</h2>
<p>This is a frontend design strategy that updates the UI before checking whether the server update succeeded. The UI updates immediately.</p>
<p>So how do we do optimistic UI in React?</p>
<p>By using a hook I did not talk about until now called <code>useOptimistic</code>.</p>
<p>The hook takes in your server state and a reducer-like function to calculate the new state while the action is pending.</p>
<pre><code class="language-javascript" data-language="javascript">const [optimisticState, addOptimistic] = useOptimistic(
  passthroughState,
  (currentState, optimisticValue) => {
    return { ...currentState, ...optimisticValue };
  }
);</code></pre>
<p>Implementation example:</p>
<pre><code class="language-javascript" data-language="javascript">type Success<T> = { data: T; error: null };
type Failure<E> = { data: null; error: E };
type Result<T, E = Error> = Success<T> | Failure<E>;

export async function tryCatch(promise) {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}</code></pre>
<p>The component logic:</p>
<pre><code class="language-javascript" data-language="javascript">import { useOptimistic } from "react";
import { updateLikeStatus } from "./actions";

function LikeButton({ post }) {
  const [optimisticPost, addOptimisticLike] = useOptimistic(
    post,
    (state, newLikeCount) => ({
      ...state,
      likes: newLikeCount,
      hasLiked: !state.hasLiked,
    })
  );

  async function handleLike() {
    const nextLikes = optimisticPost.hasLiked
      ? optimisticPost.likes - 1
      : optimisticPost.likes + 1;
    addOptimisticLike(nextLikes);

    const { error } = await tryCatch(updateLikeStatus(post.id));
    if (error) {
      // handle error here if you want
      // UI will fall back when server state updates
    }
  }

  return (
    <button onClick={handleLike}>
      {optimisticPost.hasLiked ? "❤️" : "🤍"} {optimisticPost.likes}
    </button>
  );
}</code></pre>
<p>So the code above shows how you can use <code>useOptimistic</code> to update a like button.</p>
<h2>Direct DOM Manipulation</h2>
<p>In React, you can do direct DOM manipulation, but only in client components. If it is a server component, there is no browser, so there is no DOM to access.</p>
<p>For client components, direct DOM manipulation is useful when accessing browser APIs like canvas, video, focus management, or when using a non-React library that needs DOM access.</p>
<p>How to access the DOM:</p>
<p>You use <code>useRef</code>.</p>
<pre><code class="language-javascript" data-language="javascript">import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}</code></pre>
<p>You can also use browser APIs in <code>useEffect</code> so they run in the browser and not during server rendering:</p>
<pre><code class="language-javascript" data-language="javascript">useEffect(() => {
  const handleScroll = () => console.log(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);</code></pre>
<h3>Portal</h3>
<p>A React portal is a way to render a component outside part of the normal DOM hierarchy.</p>
<p>Normally, React components are mounted where they appear in the tree, but sometimes that means parent CSS or overflow behavior affects the child. Portals help with things like modals and tooltips.</p>
<p>Here is an example:</p>
<pre><code class="language-javascript" data-language="javascript">import { createPortal } from "react-dom";

function MyPortalComponent() {
  return (
    <div>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <div className="modal">
          <p>This child is placed in the document body!</p>
        </div>,
        document.body
      )}
    </div>
  );
}</code></pre>
<p>Best practices:</p>
<ul>
   <li>make sure the target node exists</li>
   <li>if you create the node dynamically, clean it up in <code>useEffect</code></li>
</ul>
<h2>Conclusion</h2>
<p>I hope this was helpful on your journey to learning React, and if you have any questions, DM me on X at <code>@JemoLife0213</code>.</p>
<p>And I just want to say that my framework of choice is TanStack Start because of the type-safe router.</p>
<br>`;

async function main() {
  await client.execute({
    sql: `UPDATE blog SET content = ? WHERE slug = ?`,
    args: [newContent, 'modern_react_deep_dive_for_beginners']
  });
  console.log('Content updated successfully!');
}

main();