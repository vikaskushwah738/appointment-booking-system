

const Authlayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex justify-center pt-32">
            {children}
        </div>
    )
}

export default Authlayout