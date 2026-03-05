"use client";
import JobCard from "./JobCard";
export default function TabServiceYourself() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-3">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    );
}