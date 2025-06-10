import Header from "@/components/header/header.component";

export default function BooksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
} 