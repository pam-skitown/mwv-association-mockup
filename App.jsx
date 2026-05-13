import React from 'react';
export default function MWVMockSite() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f8fafc', color: '#0f172a', lineHeight: 1.6 }}>
      <header style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '20px 40px', position: 'sticky', top: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <div style={{ fontWeight: 'bold', color: '#991b1b', fontSize: '22px' }}>MWV Association</div>
            <div style={{ color: '#64748b', fontSize: '14px' }}>Responsible Vacation Rentals</div>
          </div>
          <nav style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 'bold', color: '#475569' }}>
            <span>Home</span>
            <span>Membership</span>
            <span>Vendor Directory</span>
            <span>Advocacy</span>
            <span>Resources</span>
            <span>Donate</span>
          </nav>
        </div>
      </header>

      <section style={{ padding: '100px 40px', background: 'linear-gradient(to bottom right, #f8fafc, #ffffff, #fef2f2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#ffffff', border: '1px solid #fecaca', color: '#991b1b', padding: '10px 18px', borderRadius: '999px', fontWeight: 'bold', fontSize: '14px' }}>
              Advocacy • Education • Community • Industry Partnerships
            </div>
            <h1 style={{ fontSize: '64px', lineHeight: 1.05, marginTop: '24px', marginBottom: '24px', fontWeight: '900' }}>
              Supporting responsible vacation rentals in the Mount Washington Valley.
            </h1>
            <p style={{ fontSize: '20px', color: '#475569', maxWidth: '700px' }}>
              A member-based association advocating for property owners, supporting responsible operators, and connecting the local businesses that serve the short-term rental community.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
              <button style={{ background: '#991b1b', color: '#ffffff', padding: '14px 24px', borderRadius: '12px', border: 'none', fontWeight: 'bold' }}>Become a Member</button>
              <button style={{ background: '#ffffff', color: '#0f172a', padding: '14px 24px', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>Find Local Vendors</button>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '16px' }}>Expanding advocacy, education, and industry partnerships</h2>
            <p style={{ color: '#475569', marginBottom: '24px' }}>
              This revised structure positions MWVARVR as the central resource for owners, operators, service providers, and community stakeholders.
            </p>
            <ul style={{ paddingLeft: '20px', color: '#334155' }}>
              <li>Grow membership</li>
              <li>Create recurring revenue</li>
              <li>Support legal advocacy</li>
              <li>Build vendor relationships</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '16px' }}>Membership Structure</h2>
          <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
            Create two clear membership paths for owners/operators and industry partners.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '30px', fontWeight: '900' }}>General Membership</h3>
              <div style={{ color: '#991b1b', fontSize: '40px', fontWeight: '900', margin: '12px 0' }}>$200/year</div>
              <p style={{ color: '#475569' }}>
                For property owners, operators, and supporters who want to stay informed and support advocacy efforts.
              </p>
            </div>

            <div style={{ background: '#991b1b', color: '#ffffff', padding: '32px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '30px', fontWeight: '900' }}>Industry Partner Membership</h3>
              <div style={{ fontSize: '40px', fontWeight: '900', margin: '12px 0' }}>Introductory Partner Tier</div>
              <p>
                For local businesses and service providers that support STR owners and want visibility within the MWV vacation rental community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '16px' }}>Local Vendor Directory</h2>
          <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px', maxWidth: '800px' }}>
            A searchable vendor directory gives Industry Partner Members meaningful visibility while helping owners quickly find trusted local resources.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
            {['Cleaners', 'Property Managers', 'Electricians', 'Plumbers', 'Photographers', 'Landscapers', 'Snow Removal', 'REALTORS®'].map((cat) => (
              <span key={cat} style={{ background: '#ffffff', padding: '10px 16px', borderRadius: '999px', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#334155' }}>
                {cat}
              </span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              'Indigo Property Services',
              'Ryan and Son Carpentry',
              'Isabelle Monteiro Interiors',
              'Select Rental Management'
            ].map((vendor) => (
              <div key={vendor} style={{ background: '#ffffff', padding: '24px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: '900', marginBottom: '10px' }}>{vendor}</h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>
                  Example partner listing with business information, links, and service area.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>Advocacy & Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              'Current Initiatives',
              'Legal Updates',
              'STR Best Practices',
              'Local Regulations',
              'Educational Resources',
              'Events & Community'
            ].map((item) => (
              <div key={item} style={{ background: '#f8fafc', padding: '28px', borderRadius: '20px' }}>
                <h3 style={{ fontWeight: '900', fontSize: '22px', marginBottom: '10px' }}>{item}</h3>
                <p style={{ color: '#64748b' }}>
                  Placeholder section demonstrating how content and updates could be organized.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 40px', background: '#991b1b', color: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '52px', fontWeight: '900', marginBottom: '20px' }}>
              Support advocacy, education, and responsible operation.
            </h2>
            <p style={{ color: '#fee2e2', fontSize: '18px', maxWidth: '700px' }}>
              Donations and memberships help fund legal advocacy, member education, communications, and tools that support responsible vacation rentals throughout the Mount Washington Valley.
            </p>
          </div>

          <div style={{ background: '#ffffff', color: '#0f172a', padding: '36px', borderRadius: '24px', minWidth: '320px' }}>
            <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '14px' }}>Ready to Help?</h3>
            <button style={{ background: '#991b1b', color: '#ffffff', width: '100%', padding: '14px', border: 'none', borderRadius: '12px', fontWeight: 'bold', marginBottom: '12px' }}>
              Donate
            </button>
            <button style={{ background: '#ffffff', color: '#0f172a', width: '100%', padding: '14px', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 'bold' }}>
              Join Now
            </button>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#ffffff', fontWeight: '900' }}>Mt. Washington Valley Association for Responsible Vacation Rentals</div>
            <div style={{ marginTop: '8px', fontSize: '14px' }}>Conceptual framework for discussion purposes.</div>
          </div>
          <div style={{ fontSize: '14px' }}>Home • Membership • Vendor Directory • Advocacy • Resources • Donate</div>
        </div>
      </footer>
    </div>
  );
}
