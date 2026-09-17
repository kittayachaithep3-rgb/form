//navbar  home/courses/about/contact
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                <li><Link href="/">หน้าแรก</Link></li>
                <li><Link href="/course">หลักสูตร</Link></li>
                <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                <li><Link href="/game">เกม</Link></li>
            </ul>
        </nav>
    );
}