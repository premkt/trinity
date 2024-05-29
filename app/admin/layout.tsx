import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "Trinity Admin",
    description: "Trinity Admin Dashboard",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div>
        <div>
            <AdminNav />
            {children}
        </div>
    </div>);
};

export default AdminLayout;