export default function Contact() {
  return (
    <form className="grid gap-6 max-w-md">
        <h2 className="text-5xl font-bold mb-6 text-gray-700">
          Contact Us
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-lg bg-white/70 text-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-white/70 text-gray-400"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded-lg bg-white/70 text-gray-400"
          rows={4}
        />
        <button className="bg-black text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>
  );
}
