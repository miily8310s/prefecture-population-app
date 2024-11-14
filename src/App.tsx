import { Suspense } from "react";
import "./App.css";
import {
	QueryClient,
	QueryClientProvider,
	QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Index } from "./pages";

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 0,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<QueryErrorResetBoundary>
				{({ reset }) => (
					<ErrorBoundary
						fallbackRender={({ resetErrorBoundary }) => (
							<>
								<p>エラーが発生しました</p>
								<button onClick={() => resetErrorBoundary()}>再読み込み</button>
							</>
						)}
						onReset={reset}
					>
						<Suspense fallback={<p>読み込み中...</p>}>
							<Index />
						</Suspense>
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		</QueryClientProvider>
	);
}

export default App;
