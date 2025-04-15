import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function md5(string) {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(string)).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  });
}

const AddprojectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [creator, setCreator] = useState(null);
  const [uploadingDate, setUploadingDate] = useState("");
  const [contentWriters, setContentWriters] = useState([{ email: "" }]);
  const [editors, setEditors] = useState([{ email: "" }]);
  const [rawVideos, setRawVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setCreator({
          name: data.user.user_metadata.full_name || "Creator",
          email: data.user.email,
          avatar: data.user.user_metadata.avatar_url,
        });
      }
    });
  }, []);

  const getGravatar = async (email) => {
    const hash = await md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!uploadingDate || !projectName) {
      alert("Please fill out all fields before saving.");
      return;
    }
    const formattedWriters = await Promise.all(
      contentWriters.filter(w => w.email).map(async (writer) => ({
        email: writer.email,
        name: writer.email.split("@")[0],
        avatar: await getGravatar(writer.email),
      }))
    );
    const formattedEditors = await Promise.all(
      editors.filter(e => e.email).map(async (editor) => ({
        email: editor.email,
        name: editor.email.split("@")[0],
        avatar: await getGravatar(editor.email),
      }))
    );
    const { error } = await supabase.from("projects").insert({
      name: projectName,
      creator_name: creator?.name,
      creator_email: creator?.email,
      creator_avatar: creator?.avatar,
      content_writers: formattedWriters,
      editors: formattedEditors,
      uploading_date: uploadingDate,
      deadline: uploadingDate,
    });
    if (error) {
      alert("Error saving project: " + error.message);
    } else {
      alert("Project added!");
      navigate("/create");
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', background: '#0C0C0C', overflowY: 'auto' }}>
      <style>{`
        @keyframes breathe {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.6; }
        }
      `}</style>
      <div style={{ width: 195.32, height: 195.32, left: 144.05, top: 475.73, position: 'fixed', background: 'rgba(232.19, 226.05, 236.29, 0.70)', boxShadow: '300px 300px 300px', borderRadius: 9999, filter: 'blur(150px)', zIndex: 0, animation: 'breathe 6s ease-in-out infinite' }} />
      <div style={{ width: 476, height: 477, left: 702, top: 667, position: 'fixed', background: '#60A9C1', boxShadow: '500px 500px 500px', borderRadius: 9999, filter: 'blur(250px)', zIndex: 0, animation: 'breathe 8s ease-in-out infinite' }} />
      <div style={{ width: 340.12, height: 340.12, left: 833.69, top: 53.52, position: 'fixed', background: '#7264BB', boxShadow: '300px 300px 300px', borderRadius: 9999, filter: 'blur(150px)', zIndex: 0, animation: 'breathe 7s ease-in-out infinite' }} />

      <form onSubmit={handleSave} style={{ position: 'relative', zIndex: 2, paddingTop: 60 }}>
        <div style={{ textAlign: 'center' }}>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
            style={{
              fontSize: 35,
              fontFamily: 'Poppins',
              color: '#E1DFDF',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              borderBottom: '2px solid #7264BB',
              width: '50%',
              textAlign: 'center'
            }}
          />
        </div>

        <div style={{ maxWidth: 600, margin: '50px auto 0 auto', display: 'flex', flexDirection: 'column', gap: 10, color: '#E1DFDF' }}>
          <label style={{ fontSize: 27, fontFamily: 'Poppins' }}>Creators</label>
          <div style={{ fontSize: 20, color: '#908989' }}>{creator?.email}</div>

          <label style={{ fontSize: 27, fontFamily: 'Poppins' }}>Content Writers</label>
          {contentWriters.map((writer, i) => (
            <input
              key={i}
              type="email"
              value={writer.email}
              onChange={(e) => {
                const updated = [...contentWriters];
                updated[i].email = e.target.value;
                setContentWriters(updated);
              }}
              placeholder="Content Writer Email"
              style={{
                background: 'rgba(47, 47, 47, 0.5)',
                color: '#908989',
                padding: '8px 12px',
                borderRadius: 10,
                border: '2px solid rgba(185,179,179,0.73)'
              }}
            />
          ))}
          <button type="button" onClick={() => setContentWriters([...contentWriters, { email: "" }])} style={{ color: '#ccc' }}>+ Add another writer</button>

          <label style={{ fontSize: 27, fontFamily: 'Poppins' }}>Editors</label>
          {editors.map((editor, i) => (
            <input
              key={i}
              type="email"
              value={editor.email}
              onChange={(e) => {
                const updated = [...editors];
                updated[i].email = e.target.value;
                setEditors(updated);
              }}
              placeholder="Editor Email"
              style={{
                background: 'rgba(47, 47, 47, 0.5)',
                color: '#908989',
                padding: '8px 12px',
                borderRadius: 10,
                border: '2px solid rgba(185,179,179,0.73)'
              }}
            />
          ))}
          <button type="button" onClick={() => setEditors([...editors, { email: "" }])} style={{ color: '#ccc' }}>+ Add another editor</button>

          <label style={{ fontSize: 27, fontFamily: 'Poppins', marginTop: 20 }}>Uploading Date</label>
          <DatePicker
            selected={uploadingDate ? new Date(uploadingDate) : null}
            onChange={(date) => setUploadingDate(date.toISOString().split('T')[0])}
            dateFormat="dd-MM-yyyy"
            placeholderText="Select a date"
            className="custom-datepicker"
          />

          <label style={{ fontSize: 27, fontFamily: 'Poppins', marginTop: 20 }}>Upload Raw Videos</label>
          <label
            htmlFor="video-upload"
            style={{
              background: 'rgba(47, 47, 47, 0.5)',
              color: '#E1DFDF',
              padding: '10px 16px',
              borderRadius: 10,
              border: '2px solid #948E8E',
              cursor: 'pointer',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            Choose Raw Video File
          </label>
          <input
            id="video-upload"
            type="file"
            multiple
            onChange={(e) => setRawVideos([...e.target.files])}
            style={{ display: 'none' }}
          />

          <div style={{ display: 'flex', gap: 20, marginTop: 40, marginBottom: 60 }}>
            <Link
              to="/create"
              style={{ background: 'rgba(217, 217, 217, 0.5)', padding: '10px 20px', borderRadius: 7, color: '#393939', fontWeight: 700, fontSize: 12 }}
            >
              CANCEL
            </Link>
            <button
              type="submit"
              style={{ background: '#D9D9D9', padding: '10px 20px', borderRadius: 7, color: '#393939', fontWeight: 700, fontSize: 12 }}
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddprojectForm;