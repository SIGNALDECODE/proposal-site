import { NextResponse } from 'next/server';
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase';

// 매일 Vercel Cron이 호출 → Supabase에 가벼운 쿼리를 날려 무료 플랜 자동 일시정지를 방지
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, reason: 'supabase not configured' });
  }
  try {
    const { error } = await getSupabase().from('proposals').select('slug').limit(1);
    return NextResponse.json({
      ok: !error,
      ts: new Date().toISOString(),
      error: error?.message ?? null,
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : String(e) });
  }
}
